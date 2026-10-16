import { Question } from '../types/quiz';

export const SAMPLE_QUESTIONS: Question[] = [
  // ================= INDIA GK =================
  {
    id: 'ind_1',
    category: 'india_gk',
    difficulty: 'easy',
    en: {
      question: 'Which is the national animal of India?',
      options: ['Lion', 'Royal Bengal Tiger', 'Elephant', 'Snow Leopard'],
      correctAnswerIndex: 1,
      explanation: 'The Royal Bengal Tiger (Panthera tigris) was declared the national animal of India in April 1973.'
    },
    hi: {
      question: 'भारत का राष्ट्रीय पशु कौन सा है?',
      options: ['शेर', 'रॉयल बंगाल टाइगर', 'हाथी', 'हिम तेंदुआ'],
      correctAnswerIndex: 1,
      explanation: 'अप्रैल 1973 में रॉयल बंगाल टाइगर (पैंथेरा टाइग्रिस) को भारत का राष्ट्रीय पशु घोषित किया गया था।'
    }
  },
  {
    id: 'ind_2',
    category: 'india_gk',
    difficulty: 'easy',
    en: {
      question: 'Who designed the National Flag of India?',
      options: ['Pingali Venkayya', 'Rabindranath Tagore', 'Sarojini Naidu', 'Bankim Chandra Chattopadhyay'],
      correctAnswerIndex: 0,
      explanation: 'Pingali Venkayya, an Indian freedom fighter and agriculturist, designed the tricolor National Flag of India.'
    },
    hi: {
      question: 'भारत के राष्ट्रीय ध्वज का डिज़ाइन किसने तैयार किया था?',
      options: ['पिंगली वेंकैया', 'रवींद्रनाथ टैगोर', 'सरोजिनी नायडू', 'बंकिम चंद्र चट्टोपाध्याय'],
      correctAnswerIndex: 0,
      explanation: 'भारतीय स्वतंत्रता सेनानी और कृषि विज्ञानी पिंगली वेंकैया ने भारत के तिरंगे राष्ट्रीय ध्वज का मूल प्रारूप तैयार किया था।'
    }
  },
  {
    id: 'ind_3',
    category: 'india_gk',
    difficulty: 'easy',
    en: {
      question: 'What is the national motto inscribed below the State Emblem of India?',
      options: ['Vande Mataram', 'Satyameva Jayate', 'Jai Hind', 'Jan Gan Man'],
      correctAnswerIndex: 1,
      explanation: '"Satyameva Jayate" (Truth alone triumphs) is taken from the ancient Mundaka Upanishad.'
    },
    hi: {
      question: 'भारत के राज्य प्रतीक के नीचे अंकित राष्ट्रीय आदर्श वाक्य क्या है?',
      options: ['वंदे मातरम', 'सत्यमेव जयते', 'जय हिंद', 'जन गण मन'],
      correctAnswerIndex: 1,
      explanation: '"सत्यमेव जयते" (सत्य की ही विजय होती है) प्राचीन मुंडक उपनिषद से लिया गया है।'
    }
  },
  {
    id: 'ind_4',
    category: 'india_gk',
    difficulty: 'medium',
    en: {
      question: 'Which Indian state has the longest coastline?',
      options: ['Maharashtra', 'Tamil Nadu', 'Gujarat', 'Andhra Pradesh'],
      correctAnswerIndex: 2,
      explanation: 'Gujarat has the longest mainland coastline in India, extending approximately 1,600 kilometers.'
    },
    hi: {
      question: 'भारत के किस राज्य की तटरेखा सबसे लंबी है?',
      options: ['महाराष्ट्र', 'तमिलनाडु', 'गुजरात', 'आंध्र प्रदेश'],
      correctAnswerIndex: 2,
      explanation: 'गुजरात की मुख्य भूमि की तटरेखा भारत में सबसे लंबी है, जिसकी लंबाई लगभग 1,600 किलोमीटर है।'
    }
  },
  {
    id: 'ind_5',
    category: 'india_gk',
    difficulty: 'medium',
    en: {
      question: 'Who was the first woman President of India?',
      options: ['Pratibha Patil', 'Indira Gandhi', 'Droupadi Murmu', 'Sarojini Naidu'],
      correctAnswerIndex: 0,
      explanation: 'Smt. Pratibha Devisingh Patil served as the 12th President of India from 2007 to 2012, becoming the first woman to hold this office.'
    },
    hi: {
      question: 'भारत की पहली महिला राष्ट्रपति कौन थीं?',
      options: ['प्रतिभा पाटिल', 'इंदिरा गांधी', 'द्रौपदी मुर्मू', 'सरोजिनी नायडू'],
      correctAnswerIndex: 0,
      explanation: 'श्रीमती प्रतिभा देवीसिंह पाटिल 2007 से 2012 तक भारत की 12वीं राष्ट्रपति रहीं, और वे इस पद पर पहुंचने वाली पहली महिला थीं।'
    }
  },
  {
    id: 'ind_6',
    category: 'india_gk',
    difficulty: 'medium',
    en: {
      question: 'Which city is known as the "Silicon Valley of India"?',
      options: ['Hyderabad', 'Pune', 'Bengaluru', 'Gurugram'],
      correctAnswerIndex: 2,
      explanation: 'Bengaluru (Bangalore) is known as the Silicon Valley of India due to its status as the nation\'s leading information technology exporter.'
    },
    hi: {
      question: 'किस शहर को "भारत की सिलिकॉन वैली" के नाम से जाना जाता है?',
      options: ['हैदराबाद', 'पुणे', 'बेंगलुरु', 'गुरुग्राम'],
      correctAnswerIndex: 2,
      explanation: 'भारत के प्रमुख सूचना प्रौद्योगिकी केंद्र और निर्यातक होने के कारण बेंगलुरु को "भारत की सिलिकॉन वैली" कहा जाता है।'
    }
  },
  {
    id: 'ind_7',
    category: 'india_gk',
    difficulty: 'hard',
    en: {
      question: 'Which Article of the Constitution of India provides for the Right to Constitutional Remedies?',
      options: ['Article 21', 'Article 19', 'Article 32', 'Article 44'],
      correctAnswerIndex: 2,
      explanation: 'Dr. B.R. Ambedkar called Article 32 the "Heart and Soul of the Constitution", allowing citizens to petition the Supreme Court for enforcement of fundamental rights.'
    },
    hi: {
      question: 'भारतीय संविधान का कौन सा अनुच्छेद "संवैधानिक उपचारों का अधिकार" प्रदान करता है?',
      options: ['अनुच्छेद 21', 'अनुच्छेद 19', 'अनुच्छेद 32', 'अनुच्छेद 44'],
      correctAnswerIndex: 2,
      explanation: 'डॉ. बी.आर. अम्बेडकर ने अनुच्छेद 32 को "संविधान का हृदय और आत्मा" कहा था, जो मौलिक अधिकारों के हनन पर सुप्रीम कोर्ट जाने की शक्ति देता है।'
    }
  },
  {
    id: 'ind_8',
    category: 'india_gk',
    difficulty: 'hard',
    en: {
      question: 'Where is the National Defence Academy (NDA) located in India?',
      options: ['Dehradun', 'Khadakwasla, Pune', 'Hyderabad', 'Dungarpur'],
      correctAnswerIndex: 1,
      explanation: 'The National Defence Academy (NDA) is situated at Khadakwasla near Pune, Maharashtra.'
    },
    hi: {
      question: 'भारत में राष्ट्रीय रक्षा अकादमी (NDA) कहाँ स्थित है?',
      options: ['देहरादून', 'खड़कवासला, पुणे', 'हैदराबाद', 'डूंगरपुर'],
      correctAnswerIndex: 1,
      explanation: 'राष्ट्रीय रक्षा अकादमी (NDA) महाराष्ट्र में पुणे के निकट खड़कवासला में स्थित है।'
    }
  },
  {
    id: 'ind_9',
    category: 'india_gk',
    difficulty: 'easy',
    en: {
      question: 'What is the national aquatic animal of India?',
      options: ['Gharial', 'Ganges River Dolphin', 'Olive Ridley Turtle', 'Mahseer'],
      correctAnswerIndex: 1,
      explanation: 'The Ganges River Dolphin was declared the National Aquatic Animal of India in 2009.'
    },
    hi: {
      question: 'भारत का राष्ट्रीय जलीय जीव कौन सा है?',
      options: ['घड़ियाल', 'गंगा नदी डॉल्फ़िन', 'ओलिव रिडले कछुआ', 'महासीर'],
      correctAnswerIndex: 1,
      explanation: 'गंगा नदी की डॉल्फ़िन को 2009 में भारत का राष्ट्रीय जलीय जीव घोषित किया गया था।'
    }
  },
  {
    id: 'ind_10',
    category: 'india_gk',
    difficulty: 'medium',
    en: {
      question: 'How many scheduled languages are recognized in the Eighth Schedule of the Indian Constitution?',
      options: ['18', '20', '22', '24'],
      correctAnswerIndex: 2,
      explanation: 'The Eighth Schedule of the Indian Constitution lists 22 officially recognized languages.'
    },
    hi: {
      question: 'भारतीय संविधान की आठवीं अनुसूची में कितनी मान्यता प्राप्त भाषाएं हैं?',
      options: ['18', '20', '22', '24'],
      correctAnswerIndex: 2,
      explanation: 'भारतीय संविधान की आठवीं अनुसूची में कुल 22 आधिकारिक भाषाएं शामिल हैं।'
    }
  },

  // ================= HISTORY =================
  {
    id: 'his_1',
    category: 'history',
    difficulty: 'easy',
    en: {
      question: 'In which year did India gain Independence from British rule?',
      options: ['1942', '1947', '1950', '1952'],
      correctAnswerIndex: 1,
      explanation: 'India gained Independence at midnight on August 15, 1947.'
    },
    hi: {
      question: 'भारत किस वर्ष ब्रिटिश शासन से स्वतंत्र हुआ?',
      options: ['1942', '1947', '1950', '1952'],
      correctAnswerIndex: 1,
      explanation: 'भारत 15 अगस्त 1947 की मध्यरात्रि को स्वतंत्र हुआ था।'
    }
  },
  {
    id: 'his_2',
    category: 'history',
    difficulty: 'easy',
    en: {
      question: 'Who was popularly known as "Netaji"?',
      options: ['Subhas Chandra Bose', 'Bhagat Singh', 'Lala Lajpat Rai', 'Bal Gangadhar Tilak'],
      correctAnswerIndex: 0,
      explanation: 'Subhas Chandra Bose was respectfully addressed as "Netaji" by Indian soldiers of the Azad Hind Fauj in Germany and Southeast Asia.'
    },
    hi: {
      question: '"नेताजी" के नाम से किसे जाना जाता था?',
      options: ['सुभाष चंद्र बोस', 'भगत सिंह', 'लाला लाजपत राय', 'बाल गंगाधर तिलक'],
      correctAnswerIndex: 0,
      explanation: 'सुभाष चंद्र बोस को आजाद हिंद फौज के सैनिकों और देशवासियों द्वारा आदरपूर्वक "नेताजी" कहा जाता था।'
    }
  },
  {
    id: 'his_3',
    category: 'history',
    difficulty: 'medium',
    en: {
      question: 'Who built the famous Grand Trunk Road (GT Road) across North India?',
      options: ['Akbar', 'Sher Shah Suri', 'Ashoka', 'Shah Jahan'],
      correctAnswerIndex: 1,
      explanation: 'Sher Shah Suri rebuilt and extended the ancient route in the 16th century, calling it "Sadak-e-Azam", later named the Grand Trunk Road.'
    },
    hi: {
      question: 'उत्तर भारत में प्रसिद्ध ग्रैंड ट्रंक रोड (जीटी रोड) का निर्माण किसने करवाया था?',
      options: ['अकबर', 'शेर शाह सूरी', 'अशोक', 'शाहजहाँ'],
      correctAnswerIndex: 1,
      explanation: '16वीं शताब्दी में शेर शाह सूरी ने इस प्राचीन मार्ग का पुनरुद्धार करवाया और इसे "सड़क-ए-आज़म" नाम दिया, जिसे बाद में जीटी रोड कहा गया।'
    }
  },
  {
    id: 'his_4',
    category: 'history',
    difficulty: 'medium',
    en: {
      question: 'In which year did the historic Battle of Plassey take place?',
      options: ['1757', '1764', '1857', '1526'],
      correctAnswerIndex: 0,
      explanation: 'The Battle of Plassey took place on 23 June 1757, laying the groundwork for British East India Company rule in India.'
    },
    hi: {
      question: 'ऐतिहासिक प्लासी का युद्ध किस वर्ष हुआ था?',
      options: ['1757', '1764', '1857', '1526'],
      correctAnswerIndex: 0,
      explanation: 'प्लासी का युद्ध 23 जून 1757 को लड़ा गया था, जिसने भारत में ब्रिटिश ईस्ट इंडिया कंपनी के शासन की नींव रखी।'
    }
  },
  {
    id: 'his_5',
    category: 'history',
    difficulty: 'medium',
    en: {
      question: 'Who founded the Maurya Empire with the guidance of Chanakya?',
      options: ['Ashoka', 'Bindusara', 'Chandragupta Maurya', 'Pushyamitra'],
      correctAnswerIndex: 2,
      explanation: 'Chandragupta Maurya founded the Maurya Empire around 322 BCE with the strategic mentorship of Acharya Chanakya (Kautilya).'
    },
    hi: {
      question: 'चाणक्य के मार्गदर्शन से मौर्य साम्राज्य की स्थापना किसने की थी?',
      options: ['अशोक', 'बिन्दुसार', 'चन्द्रगुप्त मौर्य', 'पुष्यमित्र'],
      correctAnswerIndex: 2,
      explanation: 'आचार्य चाणक्य (कौटिल्य) के मार्गदर्शन में चन्द्रगुप्त मौर्य ने लगभग 322 ईसा पूर्व में मौर्य साम्राज्य की स्थापना की थी।'
    }
  },
  {
    id: 'his_6',
    category: 'history',
    difficulty: 'hard',
    en: {
      question: 'Who was the Viceroy of India when the partition of Bengal took place in 1905?',
      options: ['Lord Dalhousie', 'Lord Curzon', 'Lord Ripon', 'Lord Mountbatten'],
      correctAnswerIndex: 1,
      explanation: 'Lord Curzon carried out the partition of Bengal in October 1905, triggering the nationwide Swadeshi Movement.'
    },
    hi: {
      question: '1905 में बंगाल विभाजन के समय भारत का वायसराय कौन था?',
      options: ['लॉर्ड डलहौजी', 'लॉर्ड कर्जन', 'लॉर्ड रिपन', 'लॉर्ड माउंटबेटन'],
      correctAnswerIndex: 1,
      explanation: 'लॉर्ड कर्जन ने अक्टूबर 1905 में बंगाल का विभाजन किया था, जिसके विरोध में पूरे देश में स्वदेशी आंदोलन शुरू हुआ।'
    }
  },
  {
    id: 'his_7',
    category: 'history',
    difficulty: 'hard',
    en: {
      question: 'At which session of the Indian National Congress was the resolution of "Purna Swaraj" (Complete Independence) passed?',
      options: ['Calcutta Session 1928', 'Lahore Session 1929', 'Karachi Session 1931', 'Tripuri Session 1939'],
      correctAnswerIndex: 1,
      explanation: 'The Lahore Session of 1929 presided by Jawaharlal Nehru promulgated the declaration of "Purna Swaraj" on the banks of the Ravi River.'
    },
    hi: {
      question: 'भारतीय राष्ट्रीय कांग्रेस के किस अधिवेशन में "पूर्ण स्वराज" का प्रस्ताव पारित किया गया था?',
      options: ['कलकत्ता अधिवेशन 1928', 'लाहौर अधिवेशन 1929', 'कराची अधिवेशन 1931', 'त्रिपुरी अधिवेशन 1939'],
      correctAnswerIndex: 1,
      explanation: 'जवाहरलाल नेहरू की अध्यक्षता में 1929 के ऐतिहासिक लाहौर अधिवेशन में रावी नदी के तट पर "पूर्ण स्वराज" का संकल्प लिया गया था।'
    }
  },
  {
    id: 'his_8',
    category: 'history',
    difficulty: 'easy',
    en: {
      question: 'The famous cave paintings of Ajanta and Ellora are located in which Indian state?',
      options: ['Madhya Pradesh', 'Maharashtra', 'Karnataka', 'Odisha'],
      correctAnswerIndex: 1,
      explanation: 'The UNESCO World Heritage Ajanta and Ellora caves are situated in the Chhatrapati Sambhajinagar (Aurangabad) district of Maharashtra.'
    },
    hi: {
      question: 'अजंता और एलोरा की प्रसिद्ध गुफा चित्रकारी किस भारतीय राज्य में स्थित हैं?',
      options: ['मध्य प्रदेश', 'महाराष्ट्र', 'कर्नाटक', 'ओडिशा'],
      correctAnswerIndex: 1,
      explanation: 'यूनेस्को विश्व धरोहर अजंता और एलोरा की गुफाएं महाराष्ट्र के छत्रपति संभाजीनगर (औरंगाबाद) जिले में स्थित हैं।'
    }
  },
  {
    id: 'his_9',
    category: 'history',
    difficulty: 'medium',
    en: {
      question: 'Who gave the famous slogan "Swaraj is my birthright and I shall have it"?',
      options: ['Gopal Krishna Gokhale', 'Bal Gangadhar Tilak', 'Bipin Chandra Pal', 'Bhagat Singh'],
      correctAnswerIndex: 1,
      explanation: 'Lokmanya Bal Gangadhar Tilak raised this iconic slogan to invigorate the Indian independence struggle.'
    },
    hi: {
      question: '"स्वराज मेरा जन्मसिद्ध अधिकार है और मैं इसे लेकर रहूँगा" यह प्रसिद्ध नारा किसने दिया था?',
      options: ['गोपाल कृष्ण गोखले', 'बाल गंगाधर तिलक', 'बिपिन चंद्र पाल', 'भगत सिंह'],
      correctAnswerIndex: 1,
      explanation: 'लोकमान्य बाल गंगाधर तिलक ने स्वतंत्रता संग्राम में जन-जन में उत्साह भरने के लिए यह नारा दिया था।'
    }
  },
  {
    id: 'his_10',
    category: 'history',
    difficulty: 'hard',
    en: {
      question: 'Which Indus Valley Civilization site in India features a world-famous ancient dockyard?',
      options: ['Kalibangan', 'Lothal', 'Dholavira', 'Rakhigarhi'],
      correctAnswerIndex: 1,
      explanation: 'Lothal, located in the Bhal region of modern Gujarat, possessed a massive tidal dockyard connecting it to ancient trade routes.'
    },
    hi: {
      question: 'भारत में सिंधु घाटी सभ्यता का कौन सा स्थल अपने प्राचीन गोदीबाड़ा (डॉकयार्ड/बंदरगाह) के लिए प्रसिद्ध है?',
      options: ['कालीबंगा', 'लोथल', 'धोलावीरा', 'राखीगढ़ी'],
      correctAnswerIndex: 1,
      explanation: 'वर्तमान गुजरात के भाल क्षेत्र में स्थित लोथल में एक विशाल ज्वारीय बंदरगाह (डॉकयार्ड) था, जो समुद्री व्यापार का प्रमुख केंद्र था।'
    }
  },

  // ================= GEOGRAPHY =================
  {
    id: 'geo_1',
    category: 'geography',
    difficulty: 'easy',
    en: {
      question: 'Which is the longest river flowing entirely or partly through India?',
      options: ['Yamuna', 'Ganga', 'Godavari', 'Narmada'],
      correctAnswerIndex: 1,
      explanation: 'The Ganga is the longest river of India, with a total course of over 2,525 km.'
    },
    hi: {
      question: 'भारत की सबसे लंबी नदी कौन सी है?',
      options: ['यमुना', 'गंगा', 'गोदावरी', 'नर्मदा'],
      correctAnswerIndex: 1,
      explanation: 'गंगा भारत की सबसे लंबी नदी है, जिसकी कुल लंबाई 2,525 किलोमीटर से अधिक है।'
    }
  },
  {
    id: 'geo_2',
    category: 'geography',
    difficulty: 'easy',
    en: {
      question: 'What is the highest mountain peak in India?',
      options: ['Mount Everest', 'Kangchenjunga', 'Nanda Devi', 'K2 (Godwin-Austen)'],
      correctAnswerIndex: 1,
      explanation: 'Kangchenjunga (8,586 m), situated on the Sikkim-Nepal border, is the highest peak in territory administered by India.'
    },
    hi: {
      question: 'भारत की सबसे ऊंची पर्वत चोटी कौन सी है?',
      options: ['माउंट एवरेस्ट', 'कंचनजंघा', 'नंदा देवी', 'के2 (गॉडविन-ऑस्टिन)'],
      correctAnswerIndex: 1,
      explanation: 'सिक्किम और नेपाल की सीमा पर स्थित कंचनजंघा (8,586 मीटर) भारत में स्थित सबसे ऊंची चोटी है।'
    }
  },
  {
    id: 'geo_3',
    category: 'geography',
    difficulty: 'medium',
    en: {
      question: 'The Tropic of Cancer passes through how many Indian states?',
      options: ['6', '7', '8', '9'],
      correctAnswerIndex: 2,
      explanation: 'The Tropic of Cancer (23.5° N) traverses 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.'
    },
    hi: {
      question: 'कर्क रेखा भारत के कितने राज्यों से होकर गुजरती है?',
      options: ['6', '7', '8', '9'],
      correctAnswerIndex: 2,
      explanation: 'कर्क रेखा 8 राज्यों से गुजरती है: गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड, पश्चिम बंगाल, त्रिपुरा और मिजोरम।'
    }
  },
  {
    id: 'geo_4',
    category: 'geography',
    difficulty: 'medium',
    en: {
      question: 'Which strait separates India from the island nation of Sri Lanka?',
      options: ['Malacca Strait', 'Palk Strait', 'Sunda Strait', 'Cook Strait'],
      correctAnswerIndex: 1,
      explanation: 'The Palk Strait lies between the Tamil Nadu state of India and the Jaffna District of Sri Lanka.'
    },
    hi: {
      question: 'कौन सा जलडमरूमध्य भारत को श्रीलंका से अलग करता है?',
      options: ['मलक्का जलडमरूमध्य', 'पाक जलडमरूमध्य (पाल्क स्ट्रेट)', 'सुंडा जलडमरूमध्य', 'कुक जलडमरूमध्य'],
      correctAnswerIndex: 1,
      explanation: 'पाक जलडमरूमध्य (Palk Strait) भारत के तमिलनाडु और श्रीलंका के उत्तरी भाग के बीच स्थित है।'
    }
  },
  {
    id: 'geo_5',
    category: 'geography',
    difficulty: 'medium',
    en: {
      question: 'Where is the world-renowned Kaziranga National Park situated?',
      options: ['West Bengal', 'Assam', 'Meghalaya', 'Uttarakhand'],
      correctAnswerIndex: 1,
      explanation: 'Kaziranga National Park in Assam is home to the world\'s largest population of great one-horned rhinoceroses.'
    },
    hi: {
      question: 'विश्व प्रसिद्ध काजीरंगा राष्ट्रीय उद्यान किस राज्य में स्थित है?',
      options: ['पश्चिम बंगाल', 'असम', 'मेघालय', 'उत्तराखंड'],
      correctAnswerIndex: 1,
      explanation: 'असम में स्थित काजीरंगा राष्ट्रीय उद्यान एक सींग वाले भारतीय गैंडों की दुनिया की सबसे बड़ी आबादी का घर है।'
    }
  },
  {
    id: 'geo_6',
    category: 'geography',
    difficulty: 'hard',
    en: {
      question: 'Which river is known as the "Dakshin Ganga" (Ganga of the South)?',
      options: ['Krishna', 'Kaveri', 'Godavari', 'Mahanadi'],
      correctAnswerIndex: 2,
      explanation: 'The Godavari, being the largest river system in peninsular India, is traditionally termed the Dakshin Ganga.'
    },
    hi: {
      question: 'किस नदी को "दक्षिण गंगा" के नाम से जाना जाता है?',
      options: ['कृष्णा', 'कावेरी', 'गोदावरी', 'महानदी'],
      correctAnswerIndex: 2,
      explanation: 'प्रायद्वीपीय भारत की सबसे बड़ी नदी होने और धार्मिक महत्व के कारण गोदावरी को "दक्षिण गंगा" कहा जाता है।'
    }
  },
  {
    id: 'geo_7',
    category: 'geography',
    difficulty: 'hard',
    en: {
      question: 'What is the southernmost point of the Indian Union territory called?',
      options: ['Kanyakumari', 'Indira Point', 'Kavatti', 'Rameshwaram'],
      correctAnswerIndex: 1,
      explanation: 'Indira Point, located in the Great Nicobar Island, represents the southernmost point of the Republic of India.'
    },
    hi: {
      question: 'भारतीय संघ के सबसे दक्षिणी बिंदु को क्या कहा जाता है?',
      options: ['कन्याकुमारी', 'इंदिरा पॉइंट', 'कवरत्ती', 'रामेश्वरम'],
      correctAnswerIndex: 1,
      explanation: 'ग्रेट निकोबार द्वीप पर स्थित "इंदिरा पॉइंट" भारत का सबसे दक्षिणी बिंदु है।'
    }
  },
  {
    id: 'geo_8',
    category: 'geography',
    difficulty: 'easy',
    en: {
      question: 'Which place in India receives the highest annual rainfall in the world?',
      options: ['Cherrapunji', 'Mawsynram', 'Agumbe', 'Mahabaleshwar'],
      correctAnswerIndex: 1,
      explanation: 'Mawsynram in the East Khasi Hills district of Meghalaya receives the highest recorded average annual rainfall on Earth.'
    },
    hi: {
      question: 'भारत का कौन सा स्थान विश्व में सर्वाधिक वार्षिक वर्षा प्राप्त करता है?',
      options: ['चेरापूंजी', 'मौसिनराम', 'आगुम्बे', 'महाबलेश्वर'],
      correctAnswerIndex: 1,
      explanation: 'मेघालय के पूर्वी खासी हिल्स जिले में स्थित मौसिनराम दुनिया में सबसे अधिक वर्षा वाला स्थान है।'
    }
  },
  {
    id: 'geo_9',
    category: 'geography',
    difficulty: 'medium',
    en: {
      question: 'Which lake is the largest freshwater lake in India?',
      options: ['Chilika Lake', 'Wular Lake', 'Dal Lake', 'Vembanad Lake'],
      correctAnswerIndex: 1,
      explanation: 'Wular Lake, located in the Bandipora district of Jammu and Kashmir, is India\'s largest natural freshwater lake.'
    },
    hi: {
      question: 'भारत की सबसे बड़ी मीठे पानी की प्राकृतिक झील कौन सी है?',
      options: ['चिल्का झील', 'वुलर झील', 'डल झील', 'वेम्बनाड झील'],
      correctAnswerIndex: 1,
      explanation: 'जम्मू और कश्मीर के बांदीपोरा जिले में स्थित वुलर झील भारत की सबसे बड़ी ताजे/मीठे पानी की झील है।'
    }
  },
  {
    id: 'geo_10',
    category: 'geography',
    difficulty: 'hard',
    en: {
      question: 'The Majuli island, the world\'s largest inhabited river island, is formed by which river?',
      options: ['Ganga', 'Brahmaputra', 'Indus', 'Yamuna'],
      correctAnswerIndex: 1,
      explanation: 'Majuli is a picturesque river island in Assam formed by the Brahmaputra River system.'
    },
    hi: {
      question: 'विश्व का सबसे बड़ा आबाद नदी द्वीप "माजुली" किस नदी द्वारा निर्मित है?',
      options: ['गंगा', 'ब्रह्मपुत्र', 'सिंधु', 'यमुना'],
      correctAnswerIndex: 1,
      explanation: 'माजुली द्वीप असम में ब्रह्मपुत्र नदी और उसकी सहायक नदियों द्वारा निर्मित दुनिया का सबसे बड़ा नदी द्वीप है।'
    }
  },

  // ================= SCIENCE =================
  {
    id: 'sci_1',
    category: 'science',
    difficulty: 'easy',
    en: {
      question: 'What is the primary gas found in the Earth\'s atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
      correctAnswerIndex: 2,
      explanation: 'Nitrogen makes up approximately 78% of the Earth\'s atmosphere by volume.'
    },
    hi: {
      question: 'पृथ्वी के वायुमंडल में मुख्य रूप से कौन सी गैस पाई जाती है?',
      options: ['ऑक्सीजन', 'कार्बन डाइऑक्साइड', 'नाइट्रोजन', 'आर्गन'],
      correctAnswerIndex: 2,
      explanation: 'पृथ्वी के वायुमंडल का लगभग 78% भाग नाइट्रोजन गैस से बना है।'
    }
  },
  {
    id: 'sci_2',
    category: 'science',
    difficulty: 'easy',
    en: {
      question: 'Which vitamin is synthesized in our body with exposure to morning sunlight?',
      options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin B12'],
      correctAnswerIndex: 2,
      explanation: 'Human skin synthesizes Vitamin D when exposed to the ultraviolet B (UVB) rays of sunlight.'
    },
    hi: {
      question: 'सुबह की धूप के संपर्क में आने से हमारे शरीर में किस विटामिन का संश्लेषण होता है?',
      options: ['विटामिन ए', 'विटामिन सी', 'विटामिन डी', 'विटामिन बी12'],
      correctAnswerIndex: 2,
      explanation: 'सूरज की रोशनी की यूवीबी किरणों के प्रभाव से त्वचा में विटामिन डी का निर्माण होता है।'
    }
  },
  {
    id: 'sci_3',
    category: 'science',
    difficulty: 'easy',
    en: {
      question: 'What is the chemical formula of common table salt?',
      options: ['H2O', 'NaCl', 'CO2', 'CaCO3'],
      correctAnswerIndex: 1,
      explanation: 'Table salt is chemically known as Sodium Chloride (NaCl).'
    },
    hi: {
      question: 'साधारण खाने वाले नमक का रासायनिक सूत्र क्या है?',
      options: ['H2O', 'NaCl', 'CO2', 'CaCO3'],
      correctAnswerIndex: 1,
      explanation: 'खाने के नमक का रासायनिक नाम सोडियम क्लोराइड (NaCl) है।'
    }
  },
  {
    id: 'sci_4',
    category: 'science',
    difficulty: 'medium',
    en: {
      question: 'Who is widely regarded as the "Father of the Indian Space Programme"?',
      options: ['Dr. A.P.J. Abdul Kalam', 'Dr. Homi Bhabha', 'Dr. Vikram Sarabhai', 'Prof. Satish Dhawan'],
      correctAnswerIndex: 2,
      explanation: 'Dr. Vikram Sarabhai established the Indian National Committee for Space Research (INCOSPAR), which evolved into ISRO.'
    },
    hi: {
      question: '"भारतीय अंतरिक्ष कार्यक्रम का जनक" किसे माना जाता है?',
      options: ['डॉ. ए.पी.जे. अब्दुल कलाम', 'डॉ. होमी भाभा', 'डॉ. विक्रम साराभाई', 'प्रो. सतीश धवन'],
      correctAnswerIndex: 2,
      explanation: 'डॉ. विक्रम साराभाई ने भारतीय अंतरिक्ष अनुसंधान की नींव रखी, जो आगे चलकर इसरो (ISRO) बना।'
    }
  },
  {
    id: 'sci_5',
    category: 'science',
    difficulty: 'medium',
    en: {
      question: 'Which organ in the human body produces insulin to regulate blood sugar?',
      options: ['Liver', 'Pancreas', 'Kidney', 'Spleen'],
      correctAnswerIndex: 1,
      explanation: 'The beta cells of the Islets of Langerhans in the pancreas secrete insulin.'
    },
    hi: {
      question: 'मानव शरीर का कौन सा अंग रक्त शर्करा को नियंत्रित करने के लिए इंसुलिन बनाता है?',
      options: ['यकृत (लिवर)', 'अग्न्याशय (पैंक्रियाज)', 'गुर्दा (किडनी)', 'प्लीहा (तिल्ली)'],
      correctAnswerIndex: 1,
      explanation: 'अग्न्याशय (पैंक्रियाज) की बीटा कोशिकाएं रक्त में ग्लूकोज को नियंत्रित करने के लिए इंसुलिन हार्मोन बनाती हैं।'
    }
  },
  {
    id: 'sci_6',
    category: 'science',
    difficulty: 'medium',
    en: {
      question: 'What does ISRO stand for?',
      options: [
        'Indian Scientific Research Organisation',
        'Indian Space Research Organisation',
        'International Satellite Research Organisation',
        'Indian Satellite Recovery Operations'
      ],
      correctAnswerIndex: 1,
      explanation: 'ISRO stands for Indian Space Research Organisation, headquartered in Bengaluru.'
    },
    hi: {
      question: 'इसरो (ISRO) का पूरा नाम क्या है?',
      options: [
        'इंडियन साइंटिफिक रिसर्च ऑर्गनाइजेशन',
        'इंडियन स्पेस रिसर्च ऑर्गनाइजेशन (भारतीय अंतरिक्ष अनुसंधान संगठन)',
        'इंटरनेशनल सैटेलाइट रिसर्च ऑर्गनाइजेशन',
        'इंडियन सैटेलाइट रिकवरी ऑपरेशंस'
      ],
      correctAnswerIndex: 1,
      explanation: 'ISRO का पूरा नाम "इंडियन स्पेस रिसर्च ऑर्गनाइजेशन" (भारतीय अंतरिक्ष अनुसंधान संगठन) है।'
    }
  },
  {
    id: 'sci_7',
    category: 'science',
    difficulty: 'hard',
    en: {
      question: 'Sir C.V. Raman won the Nobel Prize in Physics in 1930 for discovering which phenomenon?',
      options: ['Photoelectric Effect', 'Raman Scattering of Light', 'Nuclear Fission', 'Superconductivity'],
      correctAnswerIndex: 1,
      explanation: 'The Raman Effect demonstrated the inelastic scattering of photons by matter, celebrated annually in India as National Science Day on Feb 28.'
    },
    hi: {
      question: 'सर सी.वी. रमन ने 1930 में किस परिघटना की खोज के लिए भौतिकी का नोबेल पुरस्कार जीता था?',
      options: ['प्रकाश विद्युत प्रभाव', 'प्रकाश का रमन प्रकीर्णन (रमन प्रभाव)', 'नाभिकीय विखंडन', 'अतिचालकता'],
      correctAnswerIndex: 1,
      explanation: 'रमन प्रभाव में प्रकाश के प्रकीर्णन को समझाया गया, जिसकी स्मृति में भारत में प्रत्येक वर्ष 28 फरवरी को राष्ट्रीय विज्ञान दिवस मनाया जाता है।'
    }
  },
  {
    id: 'sci_8',
    category: 'science',
    difficulty: 'hard',
    en: {
      question: 'Which is the hardest known natural substance on Earth?',
      options: ['Titanium', 'Diamond', 'Tungsten', 'Quartz'],
      correctAnswerIndex: 1,
      explanation: 'Diamond, an allotrope of carbon with a rigid covalent lattice, rates 10 on the Mohs hardness scale.'
    },
    hi: {
      question: 'पृथ्वी पर ज्ञात सबसे कठोर प्राकृतिक पदार्थ कौन सा है?',
      options: ['टाइटेनियम', 'हीरा (डायमंड)', 'टंगस्टन', 'क्वार्ट्ज'],
      correctAnswerIndex: 1,
      explanation: 'हीरा कार्बन का एक अपररूप है और मोह्स कठोरता पैमाने पर 10 की अधिकतम रेटिंग के साथ सबसे कठोर प्राकृतिक पदार्थ है।'
    }
  },
  {
    id: 'sci_9',
    category: 'science',
    difficulty: 'easy',
    en: {
      question: 'Which instrument is used to measure atmospheric pressure?',
      options: ['Thermometer', 'Barometer', 'Hygrometer', 'Anemometer'],
      correctAnswerIndex: 1,
      explanation: 'A barometer measures atmospheric pressure, invented by Evangelista Torricelli in 1643.'
    },
    hi: {
      question: 'वायुमंडलीय दबाव को मापने के लिए किस उपकरण का उपयोग किया जाता है?',
      options: ['थर्मामीटर', 'बैरोमीटर', 'हाइग्रोमीटर', 'एनीमोमीटर'],
      correctAnswerIndex: 1,
      explanation: 'बैरोमीटर (वायुदाबमापी) का उपयोग वायुमंडलीय दबाव मापने के लिए किया जाता है।'
    }
  },
  {
    id: 'sci_10',
    category: 'science',
    difficulty: 'medium',
    en: {
      question: 'Which mission made India the first nation to successfully land a spacecraft near the Moon\'s south pole in 2023?',
      options: ['Chandrayaan-1', 'Chandrayaan-2', 'Chandrayaan-3', 'Mangalyaan'],
      correctAnswerIndex: 2,
      explanation: 'ISRO\'s Chandrayaan-3 lander Vikram touched down near the lunar south pole on August 23, 2023.'
    },
    hi: {
      question: '2023 में किस मिशन ने भारत को चंद्रमा के दक्षिणी ध्रुव के पास सफलतापूर्वक अंतरिक्ष यान उतारने वाला पहला देश बनाया?',
      options: ['चंद्रयान-1', 'चंद्रयान-2', 'चंद्रयान-3', 'मंगलयान'],
      correctAnswerIndex: 2,
      explanation: '23 अगस्त 2023 को इसरो के चंद्रयान-3 के विक्रम लैंडर ने चंद्रमा के दक्षिणी ध्रुवीय क्षेत्र पर ऐतिहासिक सॉफ्ट लैंडिंग की थी।'
    }
  },

  // ================= SPORTS =================
  {
    id: 'spo_1',
    category: 'sports',
    difficulty: 'easy',
    en: {
      question: 'Which legendary Indian hockey player was known as the "Wizard of Hockey"?',
      options: ['Balbir Singh Sr.', 'Major Dhyan Chand', 'Dhanraj Pillay', 'Manpreet Singh'],
      correctAnswerIndex: 1,
      explanation: 'Major Dhyan Chand earned three Olympic gold medals (1928, 1932, 1936) and his birthday on August 29 is celebrated as National Sports Day.'
    },
    hi: {
      question: 'किस महान भारतीय हॉकी खिलाड़ी को "हॉकी का जादूगर" कहा जाता था?',
      options: ['बलबीर सिंह सीनियर', 'मेजर ध्यानचंद', 'धनराज पिल्लै', 'मनप्रीत सिंह'],
      correctAnswerIndex: 1,
      explanation: 'मेजर ध्यानचंद ने तीन ओलंपिक स्वर्ण पदक जीते थे और उनके जन्मदिन 29 अगस्त को राष्ट्रीय खेल दिवस के रूप में मनाया जाता है।'
    }
  },
  {
    id: 'spo_2',
    category: 'sports',
    difficulty: 'easy',
    en: {
      question: 'Who won India\'s first-ever Olympic gold medal in track and field athletics?',
      options: ['Milkha Singh', 'Neeraj Chopra', 'P.T. Usha', 'Abhinav Bindra'],
      correctAnswerIndex: 1,
      explanation: 'Neeraj Chopra won the Olympic gold medal in men\'s javelin throw at the Tokyo 2020 Games with an 87.58 m throw.'
    },
    hi: {
      question: 'ट्रैक एंड फील्ड एथलेटिक्स में भारत का पहला ओलंपिक स्वर्ण पदक किसने जीता?',
      options: ['मिल्खा सिंह', 'नीरज चोपड़ा', 'पी.टी. उषा', 'अभिनव बिंद्रा'],
      correctAnswerIndex: 1,
      explanation: 'नीरज चोपड़ा ने टोक्यो 2020 ओलंपिक में भाला फेंक (जैवलिन थ्रो) स्पर्धा में 87.58 मीटर के थ्रो के साथ ऐतिहासिक स्वर्ण पदक जीता था।'
    }
  },
  {
    id: 'spo_3',
    category: 'sports',
    difficulty: 'medium',
    en: {
      question: 'In which year did the Indian cricket team win its first ICC Cricket World Cup?',
      options: ['1975', '1983', '2007', '2011'],
      correctAnswerIndex: 1,
      explanation: 'Kapil Dev captained India to its maiden World Cup victory by defeating the West Indies at Lord\'s on 25 June 1983.'
    },
    hi: {
      question: 'भारतीय क्रिकेट टीम ने अपना पहला आईसीसी क्रिकेट विश्व कप किस वर्ष जीता था?',
      options: ['1975', '1983', '2007', '2011'],
      correctAnswerIndex: 1,
      explanation: 'कपिल देव के नेतृत्व में भारतीय टीम ने 25 जून 1983 को लॉर्ड्स में वेस्टइंडीज को हराकर पहला विश्व कप जीता था।'
    }
  },
  {
    id: 'spo_4',
    category: 'sports',
    difficulty: 'medium',
    en: {
      question: 'Who became the first Indian woman to win two individual Olympic medals?',
      options: ['Mary Kom', 'Saina Nehwal', 'P.V. Sindhu', 'Karnam Malleswari'],
      correctAnswerIndex: 2,
      explanation: 'Badminton star P.V. Sindhu won Silver at Rio 2016 and Bronze at Tokyo 2020.'
    },
    hi: {
      question: 'दो व्यक्तिगत ओलंपिक पदक जीतने वाली पहली भारतीय महिला कौन बनीं?',
      options: ['मैरी कॉम', 'साइना नेहवाल', 'पी.वी. सिंधु', 'कर्णम मल्लेश्वरी'],
      correctAnswerIndex: 2,
      explanation: 'बैडमिंटन स्टार पी.वी. सिंधु ने रियो 2016 में रजत पदक और टोक्यो 2020 में कांस्य पदक जीतकर इतिहास रचा।'
    }
  },
  {
    id: 'spo_5',
    category: 'sports',
    difficulty: 'medium',
    en: {
      question: 'What is the highest sporting honour award in India?',
      options: ['Arjuna Award', 'Dronacharya Award', 'Major Dhyan Chand Khel Ratna Award', 'Padma Shri'],
      correctAnswerIndex: 2,
      explanation: 'The Major Dhyan Chand Khel Ratna Award (formerly Rajiv Gandhi Khel Ratna) is the apex sports award given by the Government of India.'
    },
    hi: {
      question: 'भारत में खेलों का सर्वोच्च सम्मान पुरस्कार कौन सा है?',
      options: ['अर्जुन पुरस्कार', 'द्रोणाचार्य पुरस्कार', 'मेजर ध्यानचंद खेल रत्न पुरस्कार', 'पद्म श्री'],
      correctAnswerIndex: 2,
      explanation: 'मेजर ध्यानचंद खेल रत्न पुरस्कार भारत सरकार द्वारा दिया जाने वाला सर्वोच्च राष्ट्रीय खेल पुरस्कार है।'
    }
  },
  {
    id: 'spo_6',
    category: 'sports',
    difficulty: 'hard',
    en: {
      question: 'Who became India\'s first Grandmaster in chess in 1988?',
      options: ['Viswanathan Anand', 'Pentala Harikrishna', 'Vidit Gujrathi', 'Gukesh D'],
      correctAnswerIndex: 0,
      explanation: 'Viswanathan Anand became India\'s first Grandmaster in 1988 and went on to win the World Chess Championship five times.'
    },
    hi: {
      question: '1988 में शतरंज में भारत के पहले ग्रैंडमास्टर कौन बने थे?',
      options: ['विश्वनाथन आनंद', 'पेंटाला हरिकृष्णा', 'विदित गुजराती', 'गुकेश डी'],
      correctAnswerIndex: 0,
      explanation: 'विश्वनाथन आनंद 1988 में भारत के पहले शतरंज ग्रैंडमास्टर बने और आगे चलकर पांच बार विश्व चैंपियन रहे।'
    }
  },
  {
    id: 'spo_7',
    category: 'sports',
    difficulty: 'hard',
    en: {
      question: 'Which city hosted the first Asian Games in 1951?',
      options: ['Tokyo', 'New Delhi', 'Manila', 'Bangkok'],
      correctAnswerIndex: 1,
      explanation: 'The inaugural Asian Games were hosted in New Delhi, India from 4 to 11 March 1951 at the Dhyan Chand National Stadium.'
    },
    hi: {
      question: '1951 में पहले एशियाई खेलों की मेजबानी किस शहर ने की थी?',
      options: ['टोक्यो', 'नई दिल्ली', 'मनीला', 'बैंकॉक'],
      correctAnswerIndex: 1,
      explanation: 'प्रथम एशियाई खेलों का आयोजन 1951 में भारत की राजधानी नई दिल्ली के नेशनल स्टेडियम में किया गया था।'
    }
  },
  {
    id: 'spo_8',
    category: 'sports',
    difficulty: 'easy',
    en: {
      question: 'How many players are on each team on the field in a Kabaddi match?',
      options: ['5', '6', '7', '9'],
      correctAnswerIndex: 2,
      explanation: 'In standard competitive Kabaddi, each team places 7 active players on the court at the start of a match.'
    },
    hi: {
      question: 'कबड्डी मैच में प्रत्येक टीम में मैदान पर कितने सक्रिय खिलाड़ी होते हैं?',
      options: ['5', '6', '7', '9'],
      correctAnswerIndex: 2,
      explanation: 'मानक प्रतिस्पर्धी कबड्डी में प्रत्येक टीम के 7 खिलाड़ी मैच की शुरुआत में मैदान पर खेलते हैं।'
    }
  },
  {
    id: 'spo_9',
    category: 'sports',
    difficulty: 'medium',
    en: {
      question: 'Who scored the historic first double-century (200*) in Men\'s One Day International (ODI) cricket?',
      options: ['Virender Sehwag', 'Sachin Tendulkar', 'Rohit Sharma', 'Chris Gayle'],
      correctAnswerIndex: 1,
      explanation: 'Sachin Tendulkar scored 200 not out against South Africa in Gwalior on 24 February 2010.'
    },
    hi: {
      question: 'पुरुष एकदिवसीय अंतरराष्ट्रीय (ODI) क्रिकेट में पहला दोहरा शतक (200*) किसने बनाया था?',
      options: ['वीरेंद्र सहवाग', 'सचिन तेंदुलकर', 'रोहित शर्मा', 'क्रिस गेल'],
      correctAnswerIndex: 1,
      explanation: 'सचिन तेंदुलकर ने 24 फरवरी 2010 को ग्वालियर में दक्षिण अफ्रीका के खिलाफ नाबाद 200 रन बनाकर इतिहास रचा था।'
    }
  },
  {
    id: 'spo_10',
    category: 'sports',
    difficulty: 'hard',
    en: {
      question: 'Who was the first Indian woman to win an Olympic medal in any sport?',
      options: ['Mary Kom', 'Karnam Malleswari', 'Saina Nehwal', 'Sakshi Malik'],
      correctAnswerIndex: 1,
      explanation: 'Weightlifter Karnam Malleswari won Bronze in the 69 kg category at the Sydney 2000 Olympic Games.'
    },
    hi: {
      question: 'किसी भी खेल में ओलंपिक पदक जीतने वाली पहली भारतीय महिला कौन थीं?',
      options: ['मैरी कॉम', 'कर्णम मल्लेश्वरी', 'साइना नेहवाल', 'साक्षी मलिक'],
      correctAnswerIndex: 1,
      explanation: 'भारोत्तोलक (वेटलिफ्टर) कर्णम मल्लेश्वरी ने सिडनी 2000 ओलंपिक खेलों में 69 किग्रा वर्ग में कांस्य पदक जीता था।'
    }
  },

  // ================= ADDITIONAL COMPREHENSIVE QUESTIONS TO ENSURE > 50 VERIFIED ORIGINAL QUESTIONS =================
  {
    id: 'ind_11',
    category: 'india_gk',
    difficulty: 'easy',
    en: {
      question: 'What is the national tree of India?',
      options: ['Neem', 'Peepal', 'Banyan', 'Mango'],
      correctAnswerIndex: 2,
      explanation: 'The Indian Banyan (Ficus benghalensis) with its massive aerial roots symbolizes eternal life and unity.'
    },
    hi: {
      question: 'भारत का राष्ट्रीय वृक्ष कौन सा है?',
      options: ['नीम', 'पीपल', 'बरगद (वटवृक्ष)', 'आम'],
      correctAnswerIndex: 2,
      explanation: 'भारतीय बरगद (Ficus benghalensis) को अपनी दीर्घायु और विशाल छाया के कारण राष्ट्रीय वृक्ष घोषित किया गया है।'
    }
  },
  {
    id: 'ind_12',
    category: 'india_gk',
    difficulty: 'easy',
    en: {
      question: 'Who wrote the National Anthem of India "Jana Gana Mana"?',
      options: ['Bankim Chandra Chattopadhyay', 'Rabindranath Tagore', 'Kazi Nazrul Islam', 'Sri Aurobindo'],
      correctAnswerIndex: 1,
      explanation: 'Rabindranath Tagore composed "Jana Gana Mana", adopted as India\'s National Anthem on January 24, 1950.'
    },
    hi: {
      question: 'भारत का राष्ट्रगान "जन गण मन" किसने लिखा था?',
      options: ['बंकिम चंद्र चट्टोपाध्याय', 'रवींद्रनाथ टैगोर', 'काजी नजरुल इस्लाम', 'श्री अरविंदो'],
      correctAnswerIndex: 1,
      explanation: 'नोबेल पुरस्कार विजेता रवींद्रनाथ टैगोर ने "जन गण मन" की रचना की थी, जिसे 24 जनवरी 1950 को राष्ट्रगान के रूप में अपनाया गया।'
    }
  },
  {
    id: 'ind_13',
    category: 'india_gk',
    difficulty: 'medium',
    en: {
      question: 'Which monument was constructed to commemorate the visit of King George V and Queen Mary to Mumbai in 1911?',
      options: ['India Gate', 'Gateway of India', 'Victoria Memorial', 'Charminar'],
      correctAnswerIndex: 1,
      explanation: 'The Gateway of India in Mumbai was designed by George Wittet to commemorate the royal British visit of 1911.'
    },
    hi: {
      question: '1911 में राजा जॉर्ज पंचम और महारानी मैरी की मुंबई यात्रा की स्मृति में कौन सा स्मारक बनाया गया था?',
      options: ['इंडिया गेट', 'गेटवे ऑफ इंडिया', 'विक्टोरिया मेमोरियल', 'चारमीनार'],
      correctAnswerIndex: 1,
      explanation: 'मुंबई का प्रसिद्ध "गेटवे ऑफ इंडिया" 1911 में ब्रिटिश सम्राट जॉर्ज पंचम के स्वागत में बनाया गया था।'
    }
  },
  {
    id: 'his_11',
    category: 'history',
    difficulty: 'easy',
    en: {
      question: 'Who was the first Prime Minister of Independent India?',
      options: ['Sardar Vallabhbhai Patel', 'Jawaharlal Nehru', 'Dr. Rajendra Prasad', 'Lal Bahadur Shastri'],
      correctAnswerIndex: 1,
      explanation: 'Pandit Jawaharlal Nehru took the oath as the first Prime Minister of free India on August 15, 1947.'
    },
    hi: {
      question: 'स्वतंत्र भारत के पहले प्रधानमंत्री कौन थे?',
      options: ['सरदार वल्लभभाई पटेल', 'जवाहरलाल नेहरू', 'डॉ. राजेंद्र प्रसाद', 'लाल बहादुर शास्त्री'],
      correctAnswerIndex: 1,
      explanation: 'पंडित जवाहरलाल नेहरू ने 15 अगस्त 1947 को स्वतंत्र भारत के प्रथम प्रधानमंत्री के रूप में शपथ ली थी।'
    }
  },
  {
    id: 'his_12',
    category: 'history',
    difficulty: 'medium',
    en: {
      question: 'The historic "Dandi March" led by Mahatma Gandhi in 1930 was against which British tax?',
      options: ['Land Tax', 'Salt Tax', 'Cotton Tax', 'Indigo Duty'],
      correctAnswerIndex: 1,
      explanation: 'The Dandi March from Sabarmati Ashram to Dandi was a nonviolent protest against the oppressive British salt monopoly and tax.'
    },
    hi: {
      question: '1930 में महात्मा गांधी द्वारा निकाली गई प्रसिद्ध "दांडी यात्रा" किस ब्रिटिश कर के विरोध में थी?',
      options: ['भूमि कर', 'नमक कर', 'कपास कर', 'नील कर'],
      correctAnswerIndex: 1,
      explanation: 'दांडी मार्च (नमक सत्याग्रह) अंग्रेजों के दमनकारी नमक कानून और एकाधिकार के खिलाफ एक ऐतिहासिक अहिंसक आंदोलन था।'
    }
  },
  {
    id: 'geo_11',
    category: 'geography',
    difficulty: 'easy',
    en: {
      question: 'What is the capital city of Rajasthan, known as the "Pink City"?',
      options: ['Udaipur', 'Jodhpur', 'Jaipur', 'Bikaner'],
      correctAnswerIndex: 2,
      explanation: 'Jaipur was dubbed the "Pink City" when Maharaja Ram Singh painted the entire city pink in 1876 to welcome the Prince of Wales.'
    },
    hi: {
      question: 'राजस्थान की राजधानी कौन सी है, जिसे "गुलाबी नगर" (पिंक सिटी) कहा जाता है?',
      options: ['उदयपुर', 'जोधपुर', 'जयपुर', 'बीकानेर'],
      correctAnswerIndex: 2,
      explanation: 'जयपुर को 1876 में प्रिंस ऑफ वेल्स के स्वागत में गुलाबी रंग से रंगा गया था, तब से इसे "गुलाबी नगर" कहा जाता है।'
    }
  },
  {
    id: 'geo_12',
    category: 'geography',
    difficulty: 'medium',
    en: {
      question: 'Which is the largest desert in India?',
      options: ['Thar Desert', 'Rann of Kutch', 'Spiti Cold Desert', 'Deccan Desert'],
      correctAnswerIndex: 0,
      explanation: 'The Thar Desert (Great Indian Desert) covers about 200,000 sq km primarily in Rajasthan.'
    },
    hi: {
      question: 'भारत का सबसे बड़ा मरुस्थल (रेगिस्तान) कौन सा है?',
      options: ['थार मरुस्थल', 'कच्छ का रण', 'स्पीति शीत मरुस्थल', 'दक्कन मरुस्थल'],
      correctAnswerIndex: 0,
      explanation: 'थार मरुस्थल (महान भारतीय मरुस्थल) लगभग 2 लाख वर्ग किलोमीटर क्षेत्र में फैला भारत का सबसे बड़ा रेगिस्तान है।'
    }
  },
  {
    id: 'sci_11',
    category: 'science',
    difficulty: 'easy',
    en: {
      question: 'Which gas do plants absorb from the air during photosynthesis?',
      options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
      correctAnswerIndex: 2,
      explanation: 'Green plants absorb Carbon Dioxide (CO2) and release Oxygen (O2) using sunlight and chlorophyll.'
    },
    hi: {
      question: 'प्रकाश संश्लेषण (फोटोसिंथेसिस) के दौरान पौधे हवा से कौन सी गैस अवशोषित करते हैं?',
      options: ['ऑक्सीजन', 'नाइट्रोजन', 'कार्बन डाइऑक्साइड', 'हाइड्रोजन'],
      correctAnswerIndex: 2,
      explanation: 'हरे पौधे क्लोरोफिल और सूर्य के प्रकाश की उपस्थिति में कार्बन डाइऑक्साइड (CO2) ग्रहण करते हैं और ऑक्सीजन छोड़ते हैं।'
    }
  },
  {
    id: 'sci_12',
    category: 'science',
    difficulty: 'medium',
    en: {
      question: 'What is the speed of light in a vacuum approximately?',
      options: ['30,000 km/s', '150,000 km/s', '300,000 km/s', '3,000,000 km/s'],
      correctAnswerIndex: 2,
      explanation: 'The speed of light in a vacuum is approximately 300,000 kilometers per second (299,792,458 m/s).'
    },
    hi: {
      question: 'निर्वात में प्रकाश की गति लगभग कितनी होती है?',
      options: ['30,000 किमी/सेकंड', '150,000 किमी/सेकंड', '300,000 किमी/सेकंड', '3,000,000 किमी/सेकंड'],
      correctAnswerIndex: 2,
      explanation: 'निर्वात (वैक्यूम) में प्रकाश की गति लगभग 3 लाख किलोमीटर प्रति सेकंड (299,792 किमी/से) होती है।'
    }
  },
  {
    id: 'spo_11',
    category: 'sports',
    difficulty: 'easy',
    en: {
      question: 'In cricket, how many bails are placed on top of three stumps?',
      options: ['1', '2', '3', '4'],
      correctAnswerIndex: 1,
      explanation: 'Two wooden bails rest across the grooves on top of the three stumps at each wicket.'
    },
    hi: {
      question: 'क्रिकेट में तीन स्टंप्स के ऊपर कितनी गिल्लियां (बेल्स) रखी जाती हैं?',
      options: ['1', '2', '3', '4'],
      correctAnswerIndex: 1,
      explanation: 'क्रिकेट में प्रत्येक विकेट के तीन स्टंप्स के ऊपर 2 लकड़ी की गिल्लियां रखी जाती हैं।'
    }
  },
  {
    id: 'spo_12',
    category: 'sports',
    difficulty: 'medium',
    en: {
      question: 'Which sport is associated with the prestigious Santosh Trophy in India?',
      options: ['Cricket', 'Football', 'Hockey', 'Badminton'],
      correctAnswerIndex: 1,
      explanation: 'The Santosh Trophy is the premier inter-state national football championship in India, founded in 1941.'
    },
    hi: {
      question: 'भारत में प्रतिष्ठित संतोष ट्रॉफी का संबंध किस खेल से है?',
      options: ['क्रिकेट', 'फुटबॉल', 'हॉकी', 'बैडमिंटन'],
      correctAnswerIndex: 1,
      explanation: 'संतोष ट्रॉफी भारत की प्रमुख अंतर-राज्यीय राष्ट्रीय फुटबॉल चैंपियनशिप प्रतियोगिता है, जिसकी शुरुआत 1941 में हुई थी।'
    }
  }
];

export const CATEGORIES_LIST = [
  {
    id: 'india_gk' as const,
    name: { en: 'India GK', hi: 'भारत सामान्य ज्ञान' },
    icon: 'Flag',
    color: 'from-orange-500 to-amber-600',
    description: { en: 'Constitution, symbols, landmarks & facts', hi: 'संविधान, राष्ट्रीय प्रतीक, धरोहर और तथ्य' }
  },
  {
    id: 'history' as const,
    name: { en: 'History', hi: 'इतिहास' },
    icon: 'Landmark',
    color: 'from-amber-600 to-yellow-700',
    description: { en: 'Freedom struggle, ancient & modern India', hi: 'स्वतंत्रता संग्राम, प्राचीन व आधुनिक काल' }
  },
  {
    id: 'geography' as const,
    name: { en: 'Geography', hi: 'भूगोल' },
    icon: 'Compass',
    color: 'from-emerald-500 to-teal-700',
    description: { en: 'Rivers, mountains, states & climate', hi: 'नदियां, पर्वतमालाएं, राज्य एवं जलवायु' }
  },
  {
    id: 'science' as const,
    name: { en: 'Science', hi: 'विज्ञान एवं तकनीक' },
    icon: 'Atom',
    color: 'from-blue-500 to-indigo-700',
    description: { en: 'Physics, biology, space & ISRO feats', hi: 'भौतिकी, जीव विज्ञान, इसरो और अंतरिक्ष' }
  },
  {
    id: 'sports' as const,
    name: { en: 'Sports', hi: 'खेलकूद' },
    icon: 'Trophy',
    color: 'from-rose-500 to-pink-600',
    description: { en: 'Cricket, Olympics, legends & trophies', hi: 'क्रिकेट, ओलंपिक, दिग्गज और ट्रॉफियां' }
  }
];
