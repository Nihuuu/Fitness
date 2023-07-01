import React from "react";
import '../Component/css/faq.css'
export const Faq=()=>{
    const center={ textalign :'center' };
    const bottom ={ marginbottom:'30px', color :'#4f53b9'};
    return(
        <div className="faq-id">
            <h2 style={bottom}>Frequently Asked Questions</h2>
        <div className="faqs-container">
          
    
          <div className="faqquestions-container">
                    <div className="faqcontent-container">
              <div className="faq-header">
                <h3>What is female fitness website?</h3>
              </div>
            
                <p  className="faq-para">
                  Female fitness aim to offer a social enivernoment for people interested in health and fitness.This website will provide you with a diet plan and workout chart to provide you with healthy lifestyle and it also provides a healthy recipes tab that provide you with tasty homemade recipes.
                </p>
              </div>
            </div>
             <div className="faqquestions-container" style={center}>
                    <div className="faqcontent-container">
              <div className="faq-header">
                <h3>How to use subscription options?</h3>
              </div>
                <p  className="faq-para" >
                 Choose the plan that's right for you. You can downgrade or upgrade at anytime.
                 Create an account by entering your email address and creating a password.
                 Enter a payment method.
                 That's it. Stream on!
                  
                </p>
              </div>
            </div>
    
            < div className="faqquestions-container">
            <div className="faqcontent-container" style={center}>
              <div className="faq-header">
                <h3 >Why healthy recipes are important</h3>
                </div>

                <p className="faq-para">
                Preparing healthy meals at home can support your immune system and reduce the risk of illnesses such as heart diseases,cancer,high blood pressure.it can give you more energy,improve how you sleep at night,and help you better manage health problems. 
                </p>
              </div>
            </div>
          </div>
<br/>
<br/>
<br/>
<br/>

          </div>
         



    )
}