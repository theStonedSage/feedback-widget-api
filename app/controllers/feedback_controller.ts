// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from "@adonisjs/core/http"
import admin from '../../start/firebase.js';
import { getFullDocData } from "../../utils/helpers.js";

export default class FeedbackController {
    public async add({ request, response }: HttpContext) {
        try {
            const data = request.body().data;

            //add data validation
            const payload = {
              ...data,
              createdAt: new Date(),
              updatedAt: new Date(),
                reviewStatus: 'pending'
            }
            
          const firestore = admin.firestore()
          const docRef = await firestore.collection('feedbacks').add(payload)
    
          return response.status(201).json({ message: 'Feedback added', id: docRef.id })
        } catch (error) {
          return response.status(500).json({ error: error.message })
        }
    }
    public async getAll({ response }: HttpContext) {
        try {
          const firestore = admin.firestore()
          const feedbackDocs = await firestore.collection('feedbacks').get();

          const feedbacks = getFullDocData(feedbackDocs);
    
          return response.status(201).json({ success: true, feedbacks })
        } catch (error) {
          return response.status(500).json({ error: error.message })
        }
    }
}