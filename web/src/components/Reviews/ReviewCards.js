import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

const ReviewCards = ({ gridLayout }) => {
  const StyledReviewCards = styled.div`
    .masonry-item {
      @media (min-width: 768px) {
        width: calc(50% - 1.5rem);
      }
      @media (min-width: 1024px) {
        width: calc(50% - 2.5rem);
      }
    }
  `;
  const data = useStaticQuery(graphql`
    {
      google: file(
        relativePath: { eq: "repeating/Reputation Badges/Google.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 84)
        }
      }
      yelp: file(relativePath: { eq: "repeating/Reputation Badges/Yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 65)
        }
      }
      facebook: file(
        relativePath: { eq: "repeating/Reputation Badges/Facebook.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 100)
        }
      }
      angiesList: file(
        relativePath: { eq: "repeating/Reputation Badges/Angies List.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 115)
        }
      }
      headshot: file(relativePath: { eq: "5.2 Review/headshot.png" }) {
        publicURL
      }
    }
  `);

  let gridItemClass = null;

  if (gridLayout === "masonry") {
    gridItemClass = "masonry-item";
  } else {
    gridItemClass = "grid-item";
  }

  const reviews = [
    {
      name: "Jason	Brouttier",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      quote:
        "This company was able to get a technician out the same day to look at a leak under the house. Marvil came out, inspected all the plumbing, identified the issue, provided recommendations  and gave me 3 options to fix the issue. This job required cutting concrete, adding a clean out and some other drain line repairs. I wasn’t expecting to have it completed the same day, but Marvil made some phone calls and got some other guys there to help. Pedro and Jose showed up, and after a long day, everything was completed, cleaned up, concrete poured, and pictures provided to show the completion of everything they did. Each step of the way they explained what was going on. I’m glad I trusted my neighbor’s recommendation as well as the Yelp reviews. A+ workmanship and business.",
    },
    {
      name: "Cheryl	F",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/I2kCswrYclxfgokYnZMWpw/120s.jpg",
      quote:
        "I was so impressed at how quickly our technician Stephen got here on a Sunday. Great job and very professional. The price was good, especially for a Sunday.",
    },
    {
      name: "Karen	W",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/2dYC_2HHrTfrwqBixX-T4A/120s.jpg",
      quote:
        "So grateful I was able to have Alexis come over today, even though I didn't have an appt.  He fixed my plugged-up toilet very quickly.  Thanks, Prodigy Plumbing for fitting me in, and thank you Alexis for solving my problem.",
    },
    {
      name: "Marissa A",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "I got an appointment the same day I called. My technician, Alexis was professional, super knowledgeable, and helpful with fixing our plumbing problems, and providing recommendations for future needs with dos and donts.",
    },
    {
      name: "Chuck	D",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Got the shower working, without busting out the wall in the shower! Quick, cool repairman. A follow up recall to reset the temperature was done quickly. All good in my jood!",
    },
    {
      name: "Mike	P",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I used Prodigy previously at my home and this time had a plumbing emergency at one of our branch offices. I called them and they were there inside of 45 minutes. Shane the tech resolved the issue quickly and communicated with me before and after the job. Excellent service!",
    },
    {
      name: "David	S",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "We had a clogged drain. Alexis (Plumber) was professional and explained in detail what was needed and cost. After an excellent job, I requested information on future work and Alexis explained exactly the process and estimated cost. He was professional and friendly as well. Would highly recommend him and would contact Prodigy Plumbing for future needs.",
    },
    {
      name: "James	H",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/ipcSQuNBVCF6uUGqVrQhRA/60s.jpg",
      quote:
        "Prompt and professional service. Tech Steven Garcia quickly diagnosed our plumbing issue, gave us 3 options and finished the job in 2 hours. Highly recommended.",
    },
    {
      name: "Raymond	Y",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Great service and great response time! The plumber who came in, Alexis, was such a great plumber. Not only did he get the job done with the most effort and professionalism, he was happy to explain to me how the toilet lines work. Another great thing is that he honored the 30 day warranty, and the second time we had found the source of the clog in our toilet. Thank you!",
    },
    {
      name: "Ashley	R",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/5qsIgYbnPeWzvGwr2BnTOg/60s.jpg",
      quote:
        "Alexis helped fix my leaking shower head today and he was awesome. He explained to me everything he did and got my shower working like normal again. 10/10 work",
    },
    {
      name: "Dr D A.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "After a long wait for our new washer/dryer, we were surprised that it was finally off the boat and arriving the next day. Before installation we needed to update our faucets. Prodigy Plumbing made it work. We are very appreciative of their effort to help us. They did what our long term plumber wouldn't.  Prodigy has a new regular customer now.",
    },
    {
      name: "Tia	B",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Alexis was amazing. He was prompt, professional, and thoroughly explained my plumbing problem to me. He also followed Covid protocol while performing his work. Thanks again to Alexis for making this experience a great one!",
    },
    {
      name: "Ilie	N",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/As_9v6-Gbqpsx59nM6FeYw/60s.jpg",
      quote:
        "Thank you Jordan and Alexis for great service and responsive call. Thanks for fixing my clogged ony bath tub.",
    },
    {
      name: "Krystal 	H",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/pkLFqXEpuPW5PwzCkPYkQg/60s.jpg",
      quote:
        "Alexis and jerry did a fantastic job fixing my gas leak. We had two pipes leaking gas and the gas company had to turn our gas off in the middle of the night. The next day I called and Alexis came that afternoon to give me a quote. He had to come back the next morning to do the work because it would take some time to do. He was able to fit me in in the morning and fix it up so that I would be able to have hot water and gas for my stove.",
    },
    {
      name: "Tiffany	H",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/jGmyP-afjOLFXvYF0UXEQA/120s.jpg",
      quote:
        "Although I didn't ultimately go with Prodigy for my job, I want to say that their professionalism and timeliness were top-notch. I made an appointment for them to check out the issue and they were there within 10-15 minutes. They took plenty of pictures and wrote up an estimate that was in my inbox in no time at all. After dealing with a terrible company through our home warranty, it was a breath of fresh air to work with Prodigy - even if it was just for a half hour. Thank you and I will definitely consider them for future work!",
    },
    {
      name: "Dinh	L",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/e2IW5CrqFEyKObA3rzcZyA/120s.jpg",
      quote:
        "Our plumber was Jerry.  He's excellent!  He really went above and beyond to make sure that our issue is addressed.  Super professional guy, who was dedicated to helping my parents, who are 2 senior citizens. It looks like Prodigy Plumbing is in high demand and could use some more employees, because Jerry had to cover for someone and drove from LA to the OC in traffic and was 2 hours late for our appointment time.  But Jordan at the call center kept me informed the whole time of Jerry's progress.  Other than that, this company was great.  I am asking them to come back to fix our heater furnace.",
    },
    {
      name: "Lourdes	R",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Thank you to Jordan and Luis! my mother was having a panic attack over what transpired with her her toilet and shower. Jordan who took my call was great,  professional, responsive, honest, and I KNEW i was in perfect hands, Jordan was able to send one of his guy out ASAP. Luis ( our tech) was very informative about our issue at home, QUICK FIX which i was super happy about, and a total fair price. Thank you again!",
    },
    {
      name: "Yolanda	G",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Alexis and Dino came out today to check my floor heater and Water tank. After their evaluation, I decided for Prodigy to come back and upgrade my gas lines and also have repiping done. Both technicians were very professional and friendly! I have been doing business with Prodigy for years",
    },
    {
      name: "Bill 	S",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "After a bit of a mix up with my appointment time I called the office and they promptly got Jerry out and he handled my service professionally and without any problems.",
    },
    {
      name: "Florencia	S",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/wqiUm1EA1hqzls-O4qtzww/60s.jpg",
      quote:
        "We called to see if they could help us with an outdoor shower project and they were out on site within hours of my inquiry. Everyone we spoke to was super nice and respectful and they provided us with a quote within the hour after leaving our house. We've had work done before by Prodigy Plumbing and can say this company is consistent. Quality customer service and workmanship.",
    },
    {
      name: "Courtney	X",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "As always, the team at Prodigy Plumbing proved how great they are.  We just needed something simple but Alexis came out same day and did an excellent job.  He wore a mask, gloves, and shoe covers to abide by COVID-19 restrictions and even checked on some pricing for another job we may need.",
    },
    {
      name: "Mike",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "We have worked with Prodigy for years and they are outstanding. Exceptional quality, fair prices and they couldn't be nicer. We have used them for massive jobs and basic run of the mill fixes - and there is no difference in service received. We recently had a main line leak and four members of their team, Garrett, Hector, Matt and Rafael were able to fix it the same day. As always, thank you all for the great work you do.",
    },
    {
      name: "Doryce	G",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/v5PXX0ybSDmVRre067hMMQ/60s.jpg",
      quote:
        "Needed a few faucets installed in my kitchen, bathrooms, and showers. Prodigy was responsive with my needs in sending me a tech today, which was appreciated. The tech was Alexis, he was professional, clean, and was very thorough in explaining to me what he had to do.  It was nice to get a price before the work began and no surprise added costs. Being a retired Veteran, I also appreciated getting a military discount. I highly recommend this company, and will use them again.",
    },
    {
      name: "Will	H",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Our toilet and shower flooded so we needed a plumber. One plumber I called gave me a ridiculously high quote and when I hesitated, he rudely said 'Do you want it done or not?!' I said no thank you and called Prodigy Plumbing instead. They were even closer by and had great Yelp reviews. Why would I pay money for rudeness? I'm really happy I called Prodigy. Jerry arrived quickly and identified the problem right away. He cleared the main line and recommended hydro jetting done to blast all the tree roots away. Jose came early next morning and got that done. It wasn't cheap but the line was thoroughly clean. They showed me real-time camera footage before and after cleaning. They also recommended we get trenchless pipe repair done to permanently fix the root problem, but it was out of our budget. We'll have to find alternative solutions for the time being. Overall, the service was professional and friendly and I would highly recommend these guys.",
    },
    {
      name: "Lauren	R",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/cGBnSlC83aSWtR21f5sZZg/60s.jpg",
      quote:
        "Thank you to Jordan and Luis! my mother was having a panic attack over what transpired with her her toilet and shower.  Jordan who took my call was great,  professional, responsive, honest, and I KNEW i was in perfect hands, Jordan was able to send one of his guy out ASAP. Luis ( our tech) was very informative about our issue at home, QUICK FIX which i was super happy about, and a total fair price.",
    },
    {
      name: "Karina	C",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/0HYBiAfy8I3wjJ2dGX5RaQ/60s.jpg",
      quote:
        "Hector, Jose and some of there buddies did an AMAZING job) Our toilet, shower and washer flooded at 3am, then again at 6am and again at 7am. I didn't want to risk serious water damage. So I searched for a great plumbing company around my area. They re did my whole plumbing for my house and my shower, toilet and washer were working like new ! I appreciate them walking me though the whole process. Took customer service to a new level.",
    },
    {
      name: "Becky 	B",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/wAJwBGlct60Ftmjfz0HpGA/60s.jpg",
      quote:
        "Luis was very explanatory and took 14 pictures and looked everywhere for a leak and couldn't find one.   Next step fight the water company.",
    },
    {
      name: "Jennifer	M",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/KEYVPWadnY8Bn9w1AnkerA/60s.jpg",
      quote:
        "From start to finish, working with Prodigy was fantastic. It was easy to book an appointment and the plumber arrived in the window he said he would. I even got a call in the morning prior to arrival letting me know when I could expect him to arrive. Jerry was the technician I had and he was friendly and reliable. I highly recommend Prodigy and will use them again when I have a plumbing need.",
    },
    {
      name: "Winston	F",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I spoke with Phil about clogged kitchen this morning.  He promised to have someone there in the afternoon.  Called me back to keep me abreast of the timing. The technicians showed up on time.  They were courteous and provided a quote which I thought was reasonable.  They finished the job within an hour.  The kitchen sink never drained so fast!  Thank you Jerry!  I am considering put in a water softener system.  Will definitely call them.",
    },
    {
      name: "Gary	O",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Quick easy and effective! Steven did a more than thorough job not only taking care of our clogged pipes, but also gathering info and videos of all the blockages and problems in the pipes. He got her very quickly after my call and helped even set up the appointment for the cleaners to come and take care of the inside of my home after as well. Excellent service and excellent technician. Thank you guys! Will refer!",
    },
    {
      name: "Candy	Delos Reyes",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14GiayOdFzbIXPKI0NFNkbBaYGWbsb7Yh4sGrEVrYlQ=w60-h60-p-rp-mo-br100",
      quote:
        "Stellar service from start to finish. We had a clogged toilet effecting the shower and found this company through Yelp due to the great reviews -- thank goodness Yelp did not disappoint. From contacting to scheduling they were professional and responsive. Alexis was thorough, professional, covid protocols from mask to even shoe coverings. Totally impressed as well as the knowledge from his supervisor regarding our plumbing and potential areas to consider in the long run.  Overall the service conducted was well done! Thanks guys as plumbing is never fun but you made it easy!!",
    },
    {
      name: "Kristen	T",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/pMST7DqH3rp9eZwR7uj_Jw/60s.jpg",
      quote:
        "Prodigy is our go-to when we have a plumbing problem as I feel the plumbers they send are always honest about repairs that do and do not need to be made. Jerry was so helpful in replacing our garbage disposal and went above and beyond to fix previous less than stellar work that was done under our kitchen sink. Thanks Jerry! Prodigy will always be our first call.",
    },
    {
      name: "Zeyu	W",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/RpxPZNEwkcxJ1Su7XEYjXA/60s.jpg",
      quote:
        "Prodigy Plumbing is redefining professionalism by prioritizing the customers' needs and providing high-quality service. After submitting the service request, their staff offered multiple time slots for consideration and followed up with reminder calls when applicable. Their admin staff was only upstaged by Luis, the on-site plumber who truly exemplified the high-level quality of work. Luis is a journeyman with tremendous experience that enabled him to quickly identify, assess, and fix the issue. In conclusion, Prodigy Plumbing has become my go to shop for all plumbing related service. God bless them.",
    },
    {
      name: "Jonathan	C",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Alexis arrived on time for both of our appointments and solved our problem quickly.  It was helpful to receive an accurate quote on all work before the work was performed - no surprises and the quote was accurate down to the cent.  We had a great experience with Prodigy and Alexis was great to work with.",
    },
    {
      name: "Andrea	M",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/ibpjkJlaHmUrQTVAp-bkTg/60s.jpg",
      quote:
        "I recently had a plumbing inspection with Prodigy that went above and beyond my expectations. Jerry and Jose were very professional, knowledgeable and punctual! As soon as they arrived they got straight to work, explained everything to me and provided me with options and the ability to ask as many questions as I needed to understand everything that was going on. Jerry suited up and crawled under the raised foundation of the house so that he could complete a true inspection, which I really appreciated. I definitely got great vibes and feel confident in their assessment. If you want to work with true professionals, give them a call!",
    },
    {
      name: "Erin	E",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/O56o7MriQeqFxRYiQAJSzg/60s.jpg",
      quote:
        "When you have a plumbing issue it can be stressful But not with Prodigy Plumbing. We have used them before for a quick snake. However this time I feared it was worst when my son texted me emergency  at home mom. The water was gushing from the kitchen facet. I wasn't home at the time. My 14yr old thankfully turned off the water. I immediately called Prodigy to see about getting someone out ASAP. Phil at dispatch picked up and said they were all booked for the day but would call me back in 10mins to see what he could do. When he called back he said he could have a tech out in 25mins  A customer called and cancelled last min which opened up a slot for me. How lucky wow that was quick. So grateful for the speedy turn around. When Lexo the tech got there and looked at the issue we both feared it was a busted pipe based on the description my son gave him, however he dug a little deeper trying to make sure  that was the problem. It's like a complicated puzzle sometimes, you never know how long it will take. Lexo managed to solve the puzzle in less than 15mins, now the trick would be getting the right tool and making sure it worked. He ran out to get the tool meanwhile his supervisor Matt who was in the area came over to help him out. Very awesome to have such great service. They both were able to fix the issue and not break any tile which was a very likely possibility at one point. They were so clean and tidy with their work as well. I hate stressing about pluming issue and they totally came to the rescue. So thankful to have a diligent, honest company in our area that we can rely on at any time   if you need any plumbing  help I wouldn't recommend anybody but Prodigy Plumbing They are seriously the best!!!!!",
    },
    {
      name: "K E.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "We called prodigy plumbing to look at our old and broken-down sewer pipes, and to do some other miscellaneous work. The big ticket item was a break in our sewer main, which they had to cut up some concrete and dig down to access. once they got there, they found the break had been sealed in with concrete. They removed the concrete at no additional charge which we appreciated very much. They fixed the break, descaled our sewer, and gave us an epoxy liner. Then they sealed the hole back up again and installed an access panel above it. the newly laid concrete is professionally done so you hardly notice the trench they had to cut. they also gave us a new standpipe for our washer and disconnected a pipe which the previous sellers had installed incorrectly, in such a way that it did not drain. overall we are incredibly happy with the work they did and will definitely be considering them for any future work we might need.",
    },
    {
      name: "Leslie	Y",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/XPBfgRi3MfvrnePOnCfnYg/60s.jpg",
      quote:
        "Our shower has been making this repetitive thumping noise for the past three weeks.  Another plumber evaluated the situation, and recommended tearing down the shower wall to locate an obstructed valve, which would cost thousands of dollars and mindless destruction. Fortunately, we were able to get a second opinion from Alexis, who showed up within the appointment window and correctly diagnosed the problem almost immediately.  It turned out that the culprit for the plumbing vibration is coming from a water heater pump that was improperly installed by a previous plumber.  Once he turned off the hot water circuit, the water hammer ceased. Due to Alexis' experience and diagnostic acumen, we were able to identify the problem and come up with a solution quickly.  Not only did he save us the unnecessary demolition of our shower and the associated cost, he is able to repair the actual issue directly. I locked my three-year-old border collie mix in the crate when Alexis arrived, and the dog was barking enthusiastically at him when he came in.  But he loves dogs and said it was okay to let our dog out of the crate.  The dog sniffed his hand and got to know him quickly.  I'd say my dog has good judgment of human character, and Alexis won her over. We've found ourselves a new favorite plumber!",
    },
    {
      name: "Deeko	S",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Edgar came and fixed our leak and was very professional and nice. I would  definitely recommend Prodigy plumbing to everyone.",
    },
    {
      name: "Bob	T",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/0a2reTf8ocQZpDtKwYH_NQ/60s.jpg",
      quote:
        "My old hotwater heater went out so I called Prodigy Plumbing. I had previously used them to unplug my kitchen drain.  For that they did a good job and were reasonably priced. For my hot water heater they were there the next morning to evaluate my old unit. It needed replacing. The gave me the option of purchasing one of their heaters or supplying my own which they would install. I chose to purchase one of theirs. It was installed the next morning by Jerry and his assistant. They hauled my old heater away along with packing materials from the new unit. I was very pleased with their professionalism and efficiency. Their pricing was reasonable.  I highly recommend this company to others and specifically Jerry for all your plumbing needs.",
    },
    {
      name: "Richard 	V",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/eHAVl9bMMtYErrVumG6bng/60s.jpg",
      quote:
        "Thank Prodigy for pointing me and referring me to One Up Plumbing since you guys didn't service our area in Brea. I appreciate it! One Up Plumbing was awesome! Thanks again!",
    },
    {
      name: "Euncie 	K",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Thank you Osiel for making this plumbing ordeal a smooth, stress-free one! My toilet was overflowing and the bath tub was not draining.  I only have one bathroom in the house so this was a nightmare. However, I called Prodigy Plumbing and was connected on the phone right away to an operator, Garrett at around 9:15am. He said he would call me back to confirm if he could get someone to my house by 10:30am. He called me back at 9:30am and said he he could get someone by 10am! I am so impressed how speedy and responsive they were to bring someone to my house! I can't tell you how thankful I am that Osiel was the one who was dispatched to my house. He was so TRANSPARENT, so HONEST, and explained my options and pricing after DIAGNOSING the problem correctly. Based on human eye observation of my pipe, toilet, and bathroom, he hypothesized that it was a tree root buildup of my main sewer line. He put a camera down the pipes and I saw on the video screen (recorded video) all the buildup of tree roots that infiltrated the piping.  He recommend hydrojetting which is cutting the tree roots with high pressure blasts of water. Based on all the EVIDENCE and information he provided me, I was able to make my decision to go with the hydrojetting and not the snaking. Snaking would have cost less, but it was a short term fix.  The hydrojetting would clear all the blockages in the pipes for a longer period of time. Osiel was so speedy to go and get the hydrojetting machinery (which is a different vehicle).  He was back within 30 minutes and right away set off to work. Once he was done, he verified his completed work by putting the camera down the pipes to show the before and after! After viewing his work, I was 100% satisfied with my service because I saw with my own eyes all the tree roots were cleared from the pipes! Osiel was speedy, patient, and explained things step-by step. As a teacher, I really appreciated his thorough and clear explanation of the problem and fix. He was also clear about the pricing as well and the pricing is very competitive! I called Prodigy because of the high ratings on yelp, and I was not disappointed and it exceeded my expectations.",
    },
    {
      name: "Thanh	L",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/K_0u6wdbQLN77i98NRq0NA/60s.jpg",
      quote:
        "Our bathtub and kitchen drains were slow to drain. I found Prodigy on Yelp and easily booked an appointment. Someone from their office even called to let me know when the plumber was on the way. She was super nice! Our plumber Jerry arrived on time and was friendly and professional. First he checked out the kitchen and gave me three options, explained the pros/cons for each one and patiently answered every question.  Then he took a look the main drainage pipe connecting to the street and found the issue with the bathtub drains. Again he gave me three options.  I appreciated him sharing what he saw on the video screens as he was diagnosing the problems. We ended up going with the cheapest/short term options because of our budget. Jerry was very understanding and still gave us excellent service. First he took care of the main pipe by clearing out all of the roots.  There was a huge difference between the before/after videos. He also snapped some photos of the offset pipe connections so I could share them with the city. At some point, a second plumber named Jerry came out to help and he was also super chill. They cleared the kitchen pipes of all the gunk and even ran the hydro jet twice just to be sure. I would recommend Prodigy and will use them in the future. I really appreciated how thorough they were for both jobs. I was super satisfied and pleased after our interaction! Thanks guys!",
    },
    {
      name: "Allen	Austin",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Called on Wednesday and the next day Luis showed up early and got right to fixing the leak in our copper pipe in the overhead in our kitchen.  90 minutes later he was done and we had no leak.   Excellent work.  Thanks Luis!",
    },
    {
      name: "Ashley	Owen",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14GjRwLDIPrekk3R0-YZ6id1-TXWPi9e_Ni7uiyheMg=w66-h66-p-rp-mo-br100",
      quote:
        "Our kitchen sink has been a problem for a few months. Steven from Prodigy Plumbing arrived on time and cleaned out the large amount of sludge causing the back up and replaced an old rusty pipe. He also let us know what to avoid putting down the drain to help avoid the problem in the future. I would definitely use this company again!",
    },
    {
      name: "Sylvia	Aguiñaga",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14Gj8y2QQetwdT2sgdELwA88oNddN9Pjv366vv7wA_w=w66-h66-p-rp-mo-br100",
      quote:
        "Jerry from Prodigy Plumbing is our favorite technician ever - hands down! He went above and beyond to explain to us our plumbing issues. You feel safe with Jerry - he's got your back.",
    },
    {
      name: "Kerry	S",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/CXbIGeW7yfAX9L27Zp7ZRQ/60s.jpg",
      quote:
        "While a little on the expensive side, the service was very prompt and Luis was exceptionally professional, helpful and friendly. I called mid day and they were able to respond to a non-emergency issue within 3 hours. Phone staff was very professional and kind. Though it was a simple backed up drain, Luis took the time to triage possible recurring problems and explain his assessment to me. He took his time and did a thorough job on what must have been the most uninteresting and redundant aspect of plumbing (snaking out a drain). He gave me a written quote of all my options.",
    },
    {
      name: "A.J.T.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/4ck4PQ9hLgbEYRqBIoq8jA/60s.jpg",
      quote:
        "Jerry and Enrique were very professional, considerate and punctual. I had a faulty sewer line and a possible gas leak under the house. Prodigy Plumbing was actually the second company I called out to assess and quote the necessary repairs. Prodigy produced a competitive quote and did the work on the same day. Highly recommend",
    },
    {
      name: "Ralph	F",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/9RhC8dMs-dGuRnSUtCv7OA/60s.jpg",
      quote:
        "Ossy was the plumber who showed up. Did my job same day. I called at 8am. He showed up at 10am. Same morning. Job was completed by 12:30pm. He was super professional, quick and efficient. I've used them 2-3 times before. They're good. Probably not the cheapest you'll find out there but they do good work and it comes with a 1 year warranty. It's painless. Another company I called, the guy kept calling me bro and dude and was so casual about it that I decided I can't risk an important plumbing job to someone who sounded like this was his side hustle.",
    },
    {
      name: "Michele	M",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Very quick to answer and respond for making the appointment. They kept me posted about arrival time. Hector was great and got the job done so quickly!",
    },
    {
      name: "Reid	Isaki",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Luis is my go to plumber. I will follow him to whatever company he goes to. Easy to communicate, on time, does great quality work.   Learned my lesson to not go with the cheapest plumber. Today Phil was my plumber, he was awesome. fixed it so quickly, didn't upsell me on anything and I am glad he came by. very clean, very efficient, very friendly",
    },
    {
      name: "Joyce	A",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/gMGt1T5CviPQQKey3KYdwg/60s.jpg",
      quote:
        "There's nothing worse than finding a clogged toilet after coming home from Sunday church and a grocery run at 3 in the afternoon. I tried a couple other plumbing services before calling Prodigy. But it since it's a Sunday and a long Memorial Day weekend to boot, those places were closed or not able to come out same day. I was very appreciative of the quick response time from call to the arrival of the technician aka plumber. The service representative on the phone said thirty minutes - it was even less than that. Steven came on time, was professional and did the service in a few minutes. He also made some other recommendations for future preventative and maintenance work. The company offers a membership fee to offset work they do but I deferred those to another day. The emergency issue was taken care of, and Steve left the bathroom plus  toilet very clean and if you can believe it, smelling fresh! $169 for the whole clean out with auger. Reasonable for the service done. Ladies: marry a plumber or mechanic!! They make good money!",
    },
    {
      name: "Toby 	I",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/aJL_CvdoZziLOW3irrgMqA/60s.jpg",
      quote:
        "Phil was incredible. I loved how efficient he was, fixed my issue without having to escalate it further. Documented everything, in and out real quick. Very clean and would definitely recommend him if you need a plumber.    Phil, i'm calling you up next time I need any plumbing fixes!!!",
    },
    {
      name: "Leticia	Araujo",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14GjHH5Ga9Xm99EUN3T3xmiZ_Iv2p1ZPrgdWUBbLi=w66-h66-p-rp-mo-br100",
      quote:
        "First time I use this plumbing company . Did not know what to expect since I never used them. What can I say my problem was solved by Luis. He explained my problem and fixed it right away. Very professional and he did not try to rip me off like other companies do. I will be telling my neighbors family and friends to use this plumbing company. Thank you Luis for all your help.",
    },
    {
      name: "Andrea	Ramos",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote: "Luis was very nice, he installed our new faucet.",
    },
    {
      name: "Brennda 	Zepeda",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I was looking around for a good plumber near me.  I called and they sent Luis over.  He solved my problem and was very knowledgeable and helped me out.  Glad I called this plumbing company.  Will be using them again in the future and will be recommending Luis.",
    },
    {
      name: "Barbara	Dean",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Alexis was punctual, professional, knowledgeable and patiently answered all my questions.  He had a good attitude which is important to me, and did a nice job.  I will definitely use Prodigy Plumbing in the future if the need arises.  Thank you very much.",
    },
    {
      name: "RyuKen	Brothers",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Had my 4th service by prodigy plumbing today. Easy and quick scheduling. I have a membership with them offering complimentary plumbing checks annually. My water bill doubled. OSIEL came today kinda predicted what is happening and there it is - 2 of 3 toilet tanks keep refilling every 5 to 10 mins. Gave me a quote, got parts and fix it quickly and mess free. He was patient to explain what he is about to do and why. Also observed covid precautions - mask, shoe covers. Hopeful my water bill would go back the way it was. Thanks Osiel!",
    },
    {
      name: "Carolyn	Queen",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14GiwzYgdFwOtgGfPg9okJkb0Eep6cA0MEkKM_so7wg=w66-h66-p-rp-mo-br100",
      quote:
        "Once again Prodigy Plumbing has come to our rescue. Today Fernando, Juan and Jerry needed to replace the corroded pipes under the house. They explained everything and did a good job. Every time we've had work done, all their men are excellent. Steven installed a new faucet for us yesterday and in the past Ozzie has done various jobs for us. We trust Prodigy Plumbing.",
    },
    {
      name: "Michael	Chang",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14GjK4bAlY0zlaP7suQjmlR_QMVJ8yP_zrfNd1en4NQ=w66-h66-p-rp-mo-br100",
      quote:
        "The two plumbing technicians were on time and knowledgeable of the issues that had occurred. The recommendations proposed were reasonable and they were willing to work with you on whichever was decided. The two technicians provided options as well, which is very convenient. The trip to the plumbing store to pick up parts was fairly quick and the install was quick. The most important aspect that i liked most was that they provided photos before and after with your receipt, which is emailed to you.",
    },
    {
      name: "Robin 	Townbridge",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Professional, personable, reliable, punctual, open and honest! The best!",
    },
    {
      name: "Calinucrew	Calinucrew",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Luis was the best, very professional and helped resolve the issue in no time at all. I would highly recommend him and the team to everyone",
    },
    {
      name: "D R ",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Steven from Prodigy Plumbing was at my house within about 1 hour of when I called.  I developed a large leak on a Sunday.  I was very impressed with the speed of service.  When Steven arrived, he was very friendly and professional.  He covered all of the options to repair the problem and answered all of my questions.  He had all the tools and equipment necessary to fix the problem.  Overall, I was very impressed with his professionalism, the quality of work, and the fair prices.  I highly recommend Prodigy Plumbing!",
    },
    {
      name: "Eileen	F",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Steven came out to install a reverse osmosis for me. Explained the process and even made a suggestion based things I mentioned I had on a wish list of updates for my home. He was very attentive, thank you Steven.",
    },
    {
      name: "Ed	Bond",
      platform: data.google.childImageSharp.gatsbyImageData,
      headshot:
        "https://lh3.googleusercontent.com/a-/AOh14GgS-T8ZKGnIH8hmh-3cWwPHD0a81TxYT-Y1yNkNBQ=w66-h66-p-rp-mo-br100",
      quote:
        "Lexo was professional, timely and provided a very detailed estimate with several options. He walked me through each option. This is our second time using Prodigy and have been happy both times.",
    },
    {
      name: "Tricia	E",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot:
        "https://s3-media0.fl.yelpcdn.com/photo/W7XtDENDM0yXtVfhK1ORGA/60s.jpg",
      quote:
        "We started using Prodigy Plumbing when we had plumbing issues at our family's business. Since then, my sister has used them for her home and now we had to use them for my house. Alexis Gomez was the technician that came to our house. He was very professional and got the work done quickly. He explained everything thoroughly and also made recommendations for us. Alexis also came with a mask and shoe covers when entering our home - very Covid friendly! I would definitely recommend this business to anyone who has any plumbing issues!!",
    },
    {
      name: "Vicky	Roper",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Marvil was very informative and very professional, cleaned everything up, also he was extremely nice. I don't know if you can request a certain plumber,  but if you can I would definitely want Marvil",
    },
    {
      name: "Martin	Alba",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Our serviceman Alexis was friendly and explained all that was needed for the job at hand and he explained his recommendations for future repairs at my house.",
    },
    {
      name: "Katherine	Farrell",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "We needed a new toilet and prodigy came highly recommended. I’m so glad we contacted them. We had Matt who was extremely quick and efficient. I honestly think the rest room is cleaner now then when got here. Thank you!!",
    },
    {
      name: "Deborah	Transue",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Steven came out to fix clogged shower and bathtub. Got here on time and did an excellent job. Neat and efficient. Will be calling him back for future work. Very reasonable priced. Highly recommended.",
    },
    {
      name: "Lourdes Delgado Diaz",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Calling a plumber during this Pandemic is a difficult decision. Prodigy’s tech came with mask, foot covers and gloves so I was relieved. Luis was very professional and efficient. Their rates are reasonable.",
    },
    {
      name: "anonymous user",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I recently moved into a new home in which the current water heater was well over its life expectancy. Rather than wait on the heater bursting and leaking everywhere, I decided that it was best to be proactive and replace the water heater. I reached out to Prodigy Plumbing and they were responsive from the start. They got my information, scheduled a technician to come out for a free quote. Before the technician arrived, the company called and let me know he was on his way. Once the technician arrived, Jose, we walked over to the water heater. He looked at it and provided instant feedback suggesting that I replace the water heater connectors and the gas line to include a sediment trap. He also provided me two different quotes (based on what I was asking for) between a tankless water heater and a tanked one (both reasonable based on other quotes I have received). He was upfront and told me that if I went tankless I would also need to install an electrical outlet, which would increase the cost. I decided to go with the tanked water heater. He then gave me a timeline of how long it would take (about 1 hour to get the heater, 1 hour to install, and about 2ish hours for the hot water to be ready). The guy did everything within 1 hour. His boss came by and dropped off the water heater! After it was done, he showed me the heater - it looked great. Definitely worth checking these guys out for any of your plumbing issues.",
    },
    {
      name: "Kelley Hoskins",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Both men were very professional and knowledgeable. They represented your company  very well .",
    },
    {
      name: "Yolanda	Muir Golgart",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Called Prodigy at 9::00 am , Technician out here at 3:00 pm, Jerry got my old corroded Water heater working , Prodigy will be back on Monday to install a New Water Heater. Jerry was very thorough and explained every thing in detail. Just glad I have Hot Water❗️.      Yolanda",
    },
    {
      name: "Vicky 	Anderson-Torres",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Wonderful company to work with. They were very Thorough in their assessment of the work that needed to be done.",
    },
    {
      name: "Jodi	Altman",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "We have used them for years at our business and home. They are awesome.",
    },
    {
      name: "Kimberlee Michele	Kelley Graves",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "It was an emergency and they came on the weekend. Fast, thorough, and KIND! I was panicked and had a horrible mess to deal with. I got nothing but help and compassion!❤️",
    },
    {
      name: "Marlene	Chapa",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I called them to replace a toilet and they were very informative as to why they couldn’t do it as I needed to replace the subfloor. They gave me a couple of referrals if I was interested.",
    },
    {
      name: "Linda	Merrill",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "After my house was tented for termites in the gas company came to turn the gas back on. It was discovered that I had a gas leak. I called Prodigy Plumbing and they came out really fast to investigate. Tony Investigated and needed to make a second trip to complete the work. He was fast efficient and did a great job. I was stressed out! I sold my home and it was closing escrow.  I didn’t want the new buyers to have to come in and deal with that problem. Prodigy Plumbing had helped me with other plumbing needs.  I would highly recommend them.",
    },
    {
      name: "Angela Lewis",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Prodigy Plumbing is quick, professional, and courteous. Our plumber was outstanding.",
    },
    {
      name: "Olga	Yatooma",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote: "Excellent service and work! Competent and professional company!",
    },
    {
      name: "Andy	Bell",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I called Prodigy Plumbing Inc for a severely backed up sewer system that was back flowing into the shower. Mark was over at the house within an hour with a great quote, and performed the work quickly and cleanly. Prodigy is awesome and I for sure will be using them again!",
    },
    {
      name: "Alvin Ceja",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Great customer service, promptness, and prices were reasonable. Called them due to draining issues and David arrived shortly after. After inspecting our concerns, he provided us a free quote and performed the work in a clean prompt manner. The service received by all with Prodigy was outstanding. Will definitely utilize them again!",
    },
    {
      name: "Connie	Kim",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Edgar was knowledgeable, respectful and on time. It was very convenient to set up the right time due to my working hours. They scheduled early so I do not have to late for my work.  I will recommend this company.",
    },
    {
      name: "Bill	Cliatt",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Tony came when he was scheduled. He was personable. Solved my drain problem by snaking the drain several times. He was done in 20 minutes. ⭐️⭐️⭐️⭐️⭐️",
    },
    {
      name: "Tyler	Ekstein",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "These guys are the best! Quoted me a good $300 less than the competition, not to mention they were able to show up the next day instead of in 2-3 days like the other 3 companies we called said it would take before they could get to us. Very respectful guys, they wear those shoe covering booties inside the home to ensure they don’t mess up carpets or anything. They did an AWESOME job, highly recommended!!",
    },
    {
      name: "Sonia	Servin",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "David (Plummer) was on time and was very courteous and professional. He made recommendations and wasn’t aggressive to get you to do the work. I would recommend Prodigy to anyone.",
    },
    {
      name: "Maurice	Cooper",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Ozzy was professional and thorough in his service.  I would recommend Prodigy for all your service needs. Thanks Ozzy for your great customer service, work, and professionalism!",
    },
    {
      name: "Michelle	Murray",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote: "Use them exclusively! Always reliable and they do great work.",
    },
    {
      name: "Chris	Robson",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Accurate estimating, on-time job performance. Very professional and courteous service.",
    },
    {
      name: "Anna 	Andres Larson",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "Luis was very friendly and professional. Explained everything  to me that’s needs to be done . Very happy with the service",
    },
    {
      name: "Marvin	Mariano",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote: "luis was competent to do the work.he was excellent",
    },
    {
      name: "Griselda	Portillo",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "First time using Prodigy Plumbimg, the service was great and they came out on a timely manner! Will keep their information handy!",
    },
    {
      name: "Marlena 	Montaño Shore Rdhap",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "I highly recommend Prodigy Plumbing. Matt has completely gained my confidence in this company. Each plumber that I have had the opportunity to meet has been professional, efficient and very kind.",
    },
    {
      name: "Ivan	Puertos",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote:
        "very great job, very hard working gave 110% in the job they were doing . vert honest and reasonable price on the job..totally recommended them to everyone..thanks for great job.",
    },
    {
      name: "Jon	Perrigo",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      headshot: "",
      quote: "Great job and very professional.",
    },
  ];

  return (
    <StyledReviewCards>
      {reviews.map((review, i) => {
        return (
          <div
            className={`w-full bg-white border-2 border-secondary-200 shadow-2xl rounded-lg mb-8 md:mb-10 p-6 md:py-8 md:px-7 md:mx-3 lg:mx-5 ${gridItemClass}`}
            key={i}
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <img
                  className="rounded-full"
                  src={review.headshot || data.headshot.publicURL}
                  alt="User Headshot"
                  width="40"
                />
                <div className="ml-3.5">
                  <span className="text-secondary-800 font-heading font-semibold">
                    {review.name}
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <GatsbyImage
                  image={review.platform}
                  alt="Social platform logo"
                />
              </div>
            </div>
            <blockquote>
              <q className="block mb-6 md:mb-0 before:hidden">{review.quote}</q>
            </blockquote>
            <div className="block md:hidden">
              <GatsbyImage image={review.platform} alt="Social platform logo" />
            </div>
          </div>
        );
      })}
    </StyledReviewCards>
  );
};

export default ReviewCards;
