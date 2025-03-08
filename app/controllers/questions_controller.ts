// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from "@adonisjs/core/http"
import admin from '../../start/firebase.js';
import { getFullDocData } from "../../utils/helpers.js";

export default class QuestionsController {
    public async add({ request, response }: HttpContext) {
        try {
          const data = request.body().data;
          //add data validation
          const payload = {
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
          }

          const firestore = admin.firestore()
          const docRef = await firestore.collection('questions').add(payload);
    
          return response.status(201).json({ message: 'Entry added', id: docRef.id })

        } catch (error) {
          return response.status(500).json({ error: error.message })
        }
    }
    public async getAll({ response }: HttpContext) {
        try {
          const firestore = admin.firestore()
          const questionDocs = await firestore.collection('questions').get();

          const questions = getFullDocData(questionDocs);
    
          return response.status(201).json({ success: true, questions })
        } catch (error) {
          return response.status(500).json({ error: error.message })
        }
    }
}