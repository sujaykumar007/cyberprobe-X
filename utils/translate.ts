import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY
const BASE_URL = 'https://translation.googleapis.com/language/translate/v2'

export const translateText = async (text:any, targetLanguage:any) => {
  try {
    const response = await axios.post(`${BASE_URL}`, {}, {
      params: {
        q: text,
        target: targetLanguage,
        format: 'text',
        key: API_KEY
      }
    })

    return response.data.data.translations[0].translatedText
  } catch (error) {
    console.error('Translation Error:', error)
    return text 
  }
}
