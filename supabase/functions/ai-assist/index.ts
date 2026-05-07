// Lovable AI Gateway - translation + SEO generation helper
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const LANG_NAMES: Record<string, string> = {
  ru: 'Russian',
  en: 'English',
  lv: 'Latvian',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  try {
    const { mode, source, sourceLang, targets, topic, route } = await req.json();
    const apiKey = Deno.env.get('LOVABLE_API_KEY');
    if (!apiKey) throw new Error('LOVABLE_API_KEY not set');

    let systemPrompt = '';
    let userPrompt = '';
    let expectJson = false;

    if (mode === 'translate') {
      const targetList = (targets as string[]).map(l => LANG_NAMES[l] || l).join(', ');
      systemPrompt = `You are a professional translator for an evangelical church website. Translate the source text into the requested target languages. Preserve tone, formatting (line breaks), and biblical/spiritual nuance. Return ONLY a JSON object with the language codes as keys and the translation as values. No prose, no markdown.`;
      userPrompt = `Source language: ${LANG_NAMES[sourceLang] || sourceLang}\nTarget languages (return these keys exactly): ${targets.join(', ')} (${targetList})\n\nSource text:\n"""${source}"""`;
      expectJson = true;
    } else if (mode === 'seo') {
      systemPrompt = `You are an SEO expert for "Salvation Temple" (Храм Спасения), an evangelical church in Riga, Latvia. Generate optimized SEO meta for the given page. Return ONLY a JSON object with this shape: {"ru":{"title":"","description":""},"en":{"title":"","description":""},"lv":{"title":"","description":""}}. Title <60 chars. Description <160 chars. Include the church name, Riga, and a compelling keyword. Natural, not keyword-stuffed.`;
      userPrompt = `Page route: ${route}\nPage topic / context: ${topic}`;
      expectJson = true;
    } else {
      throw new Error('Unknown mode');
    }

    const res = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        ...(expectJson ? { response_format: { type: 'json_object' } } : {}),
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(JSON.stringify({ error: `AI gateway: ${res.status} ${text}` }), {
        status: res.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || '{}';
    const result = expectJson ? JSON.parse(content) : content;

    return new Response(JSON.stringify({ result }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
