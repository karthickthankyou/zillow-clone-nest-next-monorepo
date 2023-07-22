import { Injectable } from '@nestjs/common'
import * as admin from 'firebase-admin'

@Injectable()
export class FirebaseService {
  private firebaseApp: admin.app.App

  constructor() {
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: process.env.firebaseClientEmail,
        privateKey: process.env.firebasePrivateKey,
        projectId: process.env.firebaseProjectId,
      }),
    })
  }

  getAuth = (): admin.auth.Auth => {
    return this.firebaseApp.auth()
  }
}
