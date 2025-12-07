import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CardFeedback from "@/components/feedback/CardFeedback";
import { feedbackData } from "../data/feedback";
import styles from "./feedback.module.css";

export default function FeedbackPage(){
    return (
      <main>
         <Header/>
         <h1> Pagina dos Feedbacks</h1>

         <div className={styles.CardFeedback}>
            {feedbackData.map((feedbackItem) => (
              <CardFeedback key={feedbackItem.id} feedbackData={feedbackItem}/>
            ))}
          </div>

          <Footer/>

          </main>
     
        )
      }
    


      


    


    