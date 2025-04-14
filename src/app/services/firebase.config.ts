import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDQPo2WsndVFLeH3OT3QfG5nYH02IZXyDw",

    authDomain: "academiaourenseapp.firebaseapp.com",
  
    projectId: "academiaourenseapp",
  
    storageBucket: "academiaourenseapp.firebasestorage.app",
  
    messagingSenderId: "325217895518",
  
    appId: "1:325217895518:web:16fe94f122b4226270e0cf",
  
    measurementId: "G-FBRBTY9816"
  
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta el servicio de autenticación
export const auth = getAuth(app);