import {Groq} from 'groq-sdk';

const GROQ_API_KEY = import.meta.env.VITE_GROQ;
const groq = new Groq({
  apiKey: GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
})

export const requestsToGroq = async (content) => {
    const reply = await groq.chat.completions.create({
        messages: [{
            role: "user",
            content
        }],
        model: 'llama3-8b-8192'
    })
    return reply.choices[0].message.content;
}
