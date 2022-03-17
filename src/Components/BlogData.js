import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const BlogData = createContext();

export const BlogArticles = (props)=>{
    const [category, setCategory] = useState(
        [
            {
                ID : "1",
                Title : "RadheShyam",
                Body : "Radhe Shyam is a 2022 Indian period romantic drama film written and directed by Radha Krishna Kumar. The film is produced by UV Creations, T-Series and was shot simultaneously in the Telugu and Hindi languages. Starring Prabhas, Pooja Hegde, the film is set in 1970s Europe following the story of Vikramaditya, a palmist who is conflicted between destiny and his love for Prerana",
                Category : "Bollywood",
                Image : "https://m.media-amazon.com/images/M/MV5BMzNhOTdlNmUtYzNiYi00MmUxLTg3ZjgtZjk4Y2Y5YTk3ODdiXkEyXkFqcGdeQXVyMTE2MjAzMTU3._V1_.jpg",
                Author : "Vishal",
                Date : "13 MAR 2022"

            },

            {
                ID : "2",
                Title : "The Kashmir Files",
                Body : "The Kashmir Files is a 2022 Indian Hindi-language drama film written and directed by Vivek Agnihotri. Produced by Zee Studios, the film is based on the exodus of Kashmiri Hindus during the Kashmir Insurgency. It stars Anupam Kher, Darshan Kumar, Mithun Chakraborty and Pallavi Joshi.",
                Category : "Bollywood",
                Image : "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/12/w900X450/Kashmir_Files_Twitter_.jpg?w=640&dpr=1.3",
                Author : "Vishal",
                Date : "11 MAR 2022"
            },

            {
                ID : "3",
                Title : "Pushpa",
                Body : "In his journey of rising in the world of red sandalwood smuggling, Pushpa, a coolie, makes a couple of enemies. However, violence erupts when the police attempt to bring down his illegal business.",
                Category : "Bollywood",
                Image : "https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg",
                Author : "Vishal",
                Date : "10 MAR 2022"
            },

            {
                ID : "4",
                Title : "Gangubai Kathiawadi",
                Body : "Young Ganga is tricked by her boyfriend with the promise of a film career and persuaded to leave the countryside for Mumbai. In Mumbai her dreams of a film career come crashing down and she is lured to the underworld.",
                Category : "Bollywood",
                Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc6v6Mqcb5AqlYrzF8VDKGVHP9QLtAiPGVA&usqp=CAU",
                Author : "Vishal",
                Date : "9 MAR 2022"

            },

            {
                ID : "5",
                Title : "Atrangi Re",
                Body : "Runaway Rinku gets forcefully married to an already engaged Vishu. The love triangle gets weirder when Rinku's lover, Sajjad, shows up",
                Category : "Bollywood",
                Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81f-p2kWi4otaZcMgkvCSbvI4sLrXmuu9rQ&usqp=CAU",
                Author : "Vishal",
                Date : "8 MAR 2022"
            },

            {
                ID : "6",
                Title : "Satyameva Jayate 2",
                Body : "As an anti-corruption bill stalls in the government and doctors go one strike, a vigilante delivers his own justice and becomes a hero.",
                Category : "Bollywood",
                Image : "https://feeds.abplive.com/onecms/images/uploaded-images/2021/10/25/2a6f2a0de520015a87f4dca185dc8f10_original.jpg?impolicy=abp_cdn&imwidth=720",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },



//technology elements

            {
                ID : "1",
                Title : "YouTube Vanced to shut down due to legal reasons",
                Body : `Vanced has been discontinued. In the coming days, the download links on the website will be taken down. We know this is not something you wanted to hear but it’s something we need to do. Thank you all for supporting us over the years,” a post read on the Twitter handle of the Vanced application.`,
                Category : "Technology",
                Image : "https://image.winudf.com/v2/image1/dmlkZW9tdXNpY3R1YmUudmlkZW8udmFuY2VkX3NjcmVlbl8wXzE2MDUwMjQzMTRfMDY3/screen-0.jpg?h=500&fakeurl=1&type=.jpg",
                Author : "Vishal",
                Date : "10 MAR 2022"
            },

            {
                ID : "2",
                Title : "New update rolling out to Snapdragon Galaxy S22 variants",
                Body : `Last month, Samsung had launched the Galaxy S22, Galaxy S22+, and the Galaxy S22 Ultra. These smartphones were shipped with Android 12-based One UI 4.1. A couple of weeks ago, Exynos variants of these smartphones started getting the March 2022 security udpdate. `,
                Category  : "Technology",
                Image : "https://www.sammobile.com/wp-content/uploads/2022/03/Galaxy-S22-Plus-7.jpg",
                Author : "Vishal",
                Date : "9 MAR 2022"
            },

            {
                ID : "3",
                Title : "Samsung India Opens First All-Women Powered Mobile Store",
                Body : "Samsung India is celebrating International Women’s Day by opening the first all-women powered mobile store. The store, located in the heart of the city of Ahmedabad,is a first of several initiatives the company plans to take in bolstering Samsung’s mission to foster diversity and ensure meaningful opportunities for all.",
                Category : "Technology",
                Image : "https://img.global.news.samsung.com/in/wp-content/uploads/2022/03/I0A0603-1024x713.jpg",
                Author : "Vishal",
                Date : "8 MAR 2022"
            },

            {
                ID : "4",
                Title : "Redmi Note 11 Pro series brings 120Hz OLED, 108MP camera for under Rs 20,000",
                Body : `The Redmi Note 11 series global launch took place in January, bringing a quartet of phones to wider markets.The Indian launch sees two devices coming to the market, namely the Redmi Note 11 Pro and the Redmi Note 11 Pro Plus 5G. The Pro Plus model simply seems to be the global Redmi Note 11 Pro 5G with a new name `,
                Category : "Technology",
                Image : "https://www.androidauthority.com/wp-content/uploads/2022/01/redmi-note-11-pro-5g-1-1000w-563h.jpg.webp",
                Author : "Vishal",
                Date : "7 MAR 2022"

            },

            {
                ID : "5",
                Title : "On its road to success, BBK is leaving OnePlus behind",
                Body : `At Mobile World Congress 2022, I was on my way to a meeting with OnePlus to get some hands-on time with the global edition of the OnePlus 10 Pro. Searching for the company’s booth on the map, I found there wasn’t one. Instead, OnePlus’ booth was built into Oppo’s, which is the largest of the BBK brands.`,
                Category : "Technology",
                Image : "https://www.androidauthority.com/wp-content/uploads/2022/03/BBK-brands-Oppo-and-OnePlus-MWC-2022-1000w-563h.jpg.webp",
                Author : "Vishal",
                Date : "6 MAR 2022"

            },

            {
                ID : "6",
                Title : "Qualcomm is no longer the top Android chipmaker in the US",
                Body : `Qualcomm has disputed IDC data showing that Mediatek was the number one Android chipmaker in the US. In an email to Android Authority, the Snapdragon chipmaker cited Counterpoint Research figures to claim that it actually had a 55% share of the Android market in the US during Q4 2021. It claimed that Mediatek only held 37% of the segment. `,
                Category : "Technology",
                Image : "https://www.androidauthority.com/wp-content/uploads/2021/11/moto-g-pure-app-drawer-1000w-563h.jpg.webp",
                Author : "Vishal",
                Date : "5 MAR 2022"

            },
            


///bollywood elements

            {
                ID : "1",
                Title : "Marvel's What If Season 2 Receives Promising Release Update",
                Body : `The majority of Marvel Studios' projects, to date, have been live-action.The Disney+ series followed Jeffery Wright's Watcher as he looked over various alternate timelines until it culminated in the cosmic being needing to form a group of heroes to take on a Multiversal threat in Infinity Ultron.`,
                Category : "Hollywood",
                Image : "https://images.thedirect.com/media/article_full/marvel-studios-what-if_izbhaHm.jpg?imgeng=cmpr_75/",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },
            
            {
                ID : "2",
                Title : " Did Leonardo DiCaprio Donate $10M to Ukraine via International Visegrad Fund?",
                Body : `Rumors that Leonardo DiCaprio donated $10 million to the International Visegrad Fund are not true. A spokesperson for the actor, however, said that DiCaprio has privately made several donations to various humanitarian groups in an effort to aid the people of Ukraine.`,
                Category : "Hollywood",
                Image : "https://www.snopes.com/tachyon/2022/03/dicaprio.png?resize=865,452&quality=65",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },

            {
                ID : "3",
                Title : "7-year-old breaks world record for identifying DC Comics characters",
                Body : `A 7-year-old comic book fan from India broke a Guinness World Record by identifying 60 DC Comics characters from photos in one minute.Nidhish VB took on the record at an event in Chennai and was able to name 60 DC Comics characters from photos that scrolled by on a screen in one minute.`,
                Category : "Hollywood",
                Image : "https://cdnph.upi.com/svc/sv/i/5321647029538/2022/1/16470296961039/7-year-old-breaks-world-record-for-identifying-DC-Comics-characters.jpg",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },

            {
                ID : "4",
                Title : "Tom Cruise's Iron Man Could Perfectly Honor RDJ's Legacy",
                Body : `Of all the myriad cameos touted for Doctor Strange 2, Tom Cruise's Iron Man appearance would perfectly honor Robert Downey Jr.'s Tony Stark legacy. Set for a domestic May 6th, 2022 release, Doctor Strange in the Multiverse of Madness continues to expand on the MCU's multiverse following the events of Spider-Man: No Way Home.`,
                Category : "Hollywood",
                Image : "https://static2.srcdn.com/wordpress/wp-content/uploads/2022/03/doctor-strange-2-tom-cruise-iron-man-perfect.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },

            {
                ID : "5",
                Title : "Pirates of the Caribbean fans 'upset' after devastating Disneyland news.",
                Body : `Pirates of the Caribbean fans 'upset' after devastating Disneyland news`,
                Category : "Hollywood",
                Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsqyrIKgfOh09bBGcllCovDSTmKFYRCrkzw&usqp=CAU",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },

            {
                ID : "6",
                Title : `House of the Dragon wraps filming and George R.R. Martin is "loving" it.`,
                Body : `House of the Dragon, HBO's prequel series to Game of Thrones, has wrapped filming.The news comes from George R.R. Martin, the author of A Song of Ice and Fire, the series of fantasy novels on which Game of Thrones and House of the Dragon are based. Martin announced the news on his blog, adding that he's already seen rough cuts of a few episodes and is "loving them."`,
                Category : "Hollywood",
                Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRScJv-c-q2r80diNlLvPwgVbZ93yywIafyw&usqp=CAU",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },
            
            

//fitness elements

           {
                ID : "1",
                Title : "Can gut issues lead to anxiety and depression? An expert answers",
                Body : `Recent studies have established that there is a close connection between gut and brain. No wonder, one tends to get butterflies in stomach before a new beginning or nauseous when anxious. Our GI tract is sensitive to emotions and external situations can impact our gut, say studies`,
                Category : "Fitness",
                Image : "https://images.hindustantimes.com/img/2022/03/14/550x309/anxiety_thumb_1647250967575_1647250977548.jpg",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },
 
            {
                ID : "2",
                Title : "Study links shift work to poorer working memory, slower mental processing",
                Body : `A new study links shift work to serious health issues as a result of the internal body clock (circadian rhythm) being out of step with the normal light-dark cycle. These include sleep disorders, cardiovascular disease, obesity, diabetes, mood disorders, and substance abuse.`,
                Category : "Fitness",
                Image : "https://images.hindustantimes.com/img/2022/03/13/550x309/_b446d806-fe5e-11ea-a5cd-623ad1e030ac_1647167149802.jpg",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },
             
            {
                ID : "3",
                Title : "Music combined with auditory beat stimulation can reduce anxiety: Study",
                Body : `Anxiety has been steadily increasing, particularly in the adolescent and young adult populations, over recent decades. Studies have previously shown that listening to music can reduce anxiety, perhaps even more effectively than some anti-anxiety medications.`,
                Category : "Fitness",
                Image : "https://images.hindustantimes.com/img/2022/03/13/550x309/Mp3_player_1646369764673_1647164921069.jpg",
                Author : "Vishal",
                Date : "10 MAR 2022"
            },
             
            {
                ID : "4",
                Title : "Exercise Improves Brain Fitness as You Age",
                Body : `Maintaining an exercise routine as you get older may be protective when it comes to brain health, a recent study suggests.One aspect that helps with brain function seems to be control over your exercise choices, which can help keep you consistent and motivated.`,
                Category : "Fitness",
                Image : "https://www.verywellfit.com/thmb/GO6ZNMAt2wgFWBBrMP3sYzN8F3o=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-726775975-e35ebd2a79b34c52891e89151988aa02.jpeg",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },
             
            {
                ID : "5",
                Title : "How Aging Affects Your Immune System",
                Body : `As you get older, your immune system ages with you. There's even a medical term for it – immunosenescence – the gradual decrease in immune function that comes with age. Similar to your walking or running speed, your body's ability to fight off infection inevitably slows.`,
                Category : "Fitness",
                Image : "https://www.usnews.com/dims4/USNEWS/8382cdd/2147483647/crop/2121x1414%2B0%2B0/resize/300x300%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F57%2F10%2F2cb309d048e696adfdc0546dcd5c%2F211101-stock.jpg",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },
             
            {
                ID : "6",
                Title : "Staying Fit May Keep Alzheimer's at Bay",
                Body : `Participants who were most physically fit were 33% less likely to develop Alzheimer’s disease than the least fit, the researchers found. And those whose fitness was below the most fit were, depending on their level of fitness, 26% to 13% less likely to develop the mind-robbing disease than the least fit. `,
                Category : "Fitness",
                Image : "https://www.usnews.com/dims4/USNEWS/cf270a7/2147483647/resize/300x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F28%2F15d3a7ef6fa9d8c3ef9182e6324338%2FHD2656778455image.jpg",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },
            
            
// food elements


             
            {
                ID : "1",
                Title : "Nomad Pizza Promises A Voyage Of The World Through Its Food",
                Body : `We have always associated pizza with Italian cuisine, even though we relish just the Indianised version of it. Have you ever wondered how pizza tastes like in other regions across the globe? Calling out all pizza lovers in the country to experience the beloved pizza in its most elemental form, Nomad Pizza offers authentic pizzas not just from Italy but from 'around the world'.`,
                Category : "Food",
                Image : "https://c.ndtvimg.com/2022-03/hdqbet0g_nomad-pizza_625x300_14_March_22.jpg",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },
                         
            {
                ID : "2",
                Title : "Consuming Lentils And Grains May Increase Life Expectancy By 8 To 13 Years: Study",
                Body : `We have often heard the saying that the right kind of diet can impact your health. Eating nutritious and healthy food can go a long way in maintaining a healthy body and mind. Experts and nutritionists strongly recommend controlling the diet to manage a wide range of health issues and lifestyle diseases. And now, research supports this claim too! A recently surfaced study shows that a healthy diet has a significant impact on the life expectancy of an individual..`,
                Category : "Food",
                Image : "https://c.ndtvimg.com/whole-grains_625x300_1530163447701.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },

                         
            {
                ID : "3",
                Title : "Adopt Nordic Diet To Prevent Obesity",
                Body : `Nordic diet, which consists of berries, veggies, fish, whole grains and rapeseed oil, has been recognised as extremely healthy, tasty and sustainable. Until now, the health benefits attributed to a Nordic diet by researchers primarily focused on weight loss`,
                Category : "Food",
                Image : "https://images.news18.com/ibnlive/uploads/2022/03/women-day-diet-16464562523x2.jpg?impolicy=website&width=510&height=356",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },

                         
            {
                ID : "4",
                Title : "How Many Cups of Coffee a Day are Healthy for You?",
                Body : `Most people start their day with a steaming cup of coffee. It helps them to get charged and go for their day. Coffee can support heart health, lower the risk of depression, help in weight management, and more. With such great benefits and divine taste, coffee is the go-to drink of many people. But it is said that excess consumption of anything can be harmful to health.`,
                Category : "Food",
                Image : "https://images.news18.com/ibnlive/uploads/2021/12/coffee-mug-16387975963x2.jpg?impolicy=website&width=510&height=356",
                Author : "Vishal",
                Date : "7 MAR 2022"

            },
             
            {
                ID : "5",
                Title : " India’s first post office cafe opens in Kolkata",
                Body : `The decor is almost anachronistic. The flex poster of the Ajanta apsara in defiant contrast to the pop colours of the cafe. But there is something strangely comforting about India’s first post office cafe. Siuli, the parcel cafe, housed in the spectacular General Post Office of Kolkata, doesn’t need much to charm its patrons. It’s a success simply because it exists.`,
                Category : "Food",
                Image : "https://images.indianexpress.com/2022/03/parcel-cafe_1200_shashi-ghosh.jpg",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },
                         
            {
                ID : "6",
                Title : "Have we reached peak plant milk? Not even close",
                Body : `It is a bountiful time for plant-based milks, with new varieties of nut, seed, grain, legume and now vegetable milks showing up on store shelves every year. Now comes potato milk.`,
                Category : "Food",
                Image : "https://images.indianexpress.com/2022/03/PLANT-MILK.jpg",
                Author : "Vishal",
                Date : "7 MAR 2022"
            },
                         


            
            
        ],

        
        
    )

    return(
        <div>
            <BlogData.Provider value={[category, setCategory]}>
                {props.children}
            </BlogData.Provider>
        </div>
    )
}

