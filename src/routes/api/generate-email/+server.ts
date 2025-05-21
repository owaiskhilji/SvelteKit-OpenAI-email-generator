import type { RequestHandler } from '@sveltejs/kit';
import { OpenAI } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';


const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});


export const POST: RequestHandler = async ({ request }) => {
  try {
// Parse the request body
const {scenario, tone} = await request.json();

const completion = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
  {
    role:"user",
    content: `Write an email in the '${tone}' tone that covers the following scenario: ${scenario}`
  }
],
max_tokens: 300
})

const email = completion.choices[0].message.content;

return new Response(
  JSON.stringify({ email }),
  {
    status: 200,
  }
)
  } catch(error) {
     console.error('Error generating email:', error);
    return new Response(JSON.stringify({ error: 'Email generate issuse' }), { status: 500 });
  }
};
