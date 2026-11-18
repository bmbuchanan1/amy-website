// Service page content.
// DRAFT COPY: written from the "Website Updates" document as a starting point.
// Amy to review and edit every field. Each page should be roughly 400–600 words in total.

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string; // H1 and card title
  metaTitle: string; // <title> without the site suffix
  description: string; // meta description, ~150–160 characters
  keywords: string[];
  intro: string[];
  whoFor: string[];
  helpWith: string[];
  sessions: string;
  approach: string;
  faqs: ServiceFaq[];
  // Matching home page service card title, so the card can link here.
  homeCardTitle?: string;
}

export const services: Service[] = [
  {
    slug: "grief-counselling",
    title: "Grief Counselling",
    metaTitle: "Grief Counselling in South Africa (Online & In-Person)",
    description:
      "Compassionate grief counselling online and in-person in South Africa. Support to process loss, including the death of a parent, and find a path through grief.",
    keywords: ["grief counselling", "grief counselling South Africa", "coping with the death of a parent", "online grief counselling"],
    homeCardTitle: "Loss & Grief",
    intro: [
      "Grief can arrive in many forms: the death of someone you love, the end of a relationship, the loss of a pregnancy, a job, a home, or a version of your life you expected. Grief is not something to be fixed, and there is no right timeline for it.",
      "Counselling offers a steady, confidential space to say what you have not yet been able to say, to make sense of what has changed, and to find ways of carrying the loss that feel workable for you.",
    ],
    whoFor: [
      "Anyone grieving the death of a parent, partner, child, friend or other loved one",
      "People who feel stuck, numb or overwhelmed, or who cannot function the way they used to",
      "People whose grief is complicated by guilt, anger, relief or unfinished conversations",
      "Anyone who has been told they should be “over it by now”",
    ],
    helpWith: [
      "Making sense of the emotions that come with loss",
      "Coping with anxiety, low mood or sleep changes linked to grief",
      "Navigating family dynamics and changing roles after a death",
      "Finding ways to keep a loved one’s memory part of your life",
      "Rebuilding routine and a sense of meaning",
    ],
    sessions:
      "Sessions last between 45 minutes and one hour, online via Google Meet or in-person in Hillcrest, KZN. We begin with what has brought you to counselling and what you need most right now. You set the pace: some sessions are mostly talking, others focus on specific coping strategies or memories.",
    approach:
      "I work from a person-centred, integrative framework. You are the expert in your own life, and together we build an approach that fits you. I will not tell you how to grieve. My role is to walk alongside you and help you find your own way through.",
    faqs: [
      {
        q: "How do I know if I need grief counselling?",
        a: "If your grief is affecting your work, relationships, health or daily life, or if you feel stuck, counselling can help. You do not need to be in crisis to reach out.",
      },
      {
        q: "Is grief counselling only for recent losses?",
        a: "No. Some people come soon after a loss. Others come months or years later, when the grief resurfaces or they feel ready to look at it.",
      },
      {
        q: "Can I have grief counselling online?",
        a: "Yes. Online sessions via Google Meet work well for many people. You need a private space and a stable internet connection.",
      },
    ],
  },
  {
    slug: "trauma-counselling",
    title: "Trauma Counselling",
    metaTitle: "Trauma Counselling in South Africa (Online & In-Person)",
    description:
      "Gentle, trauma-informed counselling online and in-person in South Africa to help you process difficult experiences and move forward at your own pace.",
    keywords: ["trauma counselling", "trauma therapy online", "trauma counselling South Africa", "trauma-informed counselling"],
    homeCardTitle: "Trauma Counselling",
    intro: [
      "Trauma can follow a single overwhelming event or build up over time, through experiences such as abuse, neglect, accidents, violence, or living with ongoing stress. It can show up as flashbacks, hypervigilance, shutting down, or feeling disconnected from yourself and others.",
      "My approach is trauma-informed. That means we move at a pace that feels safe, you stay in control of what you share, and we build stability before going deeper.",
    ],
    whoFor: [
      "Adults processing one-off or ongoing traumatic experiences",
      "People living with flashbacks, nightmares or intrusive memories",
      "Those who feel constantly on edge, numb or easily triggered",
      "People who have not yet spoken about what happened",
    ],
    helpWith: [
      "Understanding how trauma affects your body, thoughts and relationships",
      "Building grounding and regulation skills for difficult moments",
      "Processing memories at a pace you can manage",
      "Reducing avoidance and reclaiming everyday life",
      "Rebuilding trust in yourself and in others",
    ],
    sessions:
      "Early sessions focus on safety, stability and understanding your story at a manageable pace. Later work may involve processing specific experiences, always with you in control of how much you share. Sessions last 45 minutes to one hour, online or in-person in Hillcrest, KZN.",
    approach:
      "I am not in a rush. Trauma-informed work means you are never pushed to revisit something before you are ready, and you can pause or stop at any time. Building a felt sense of safety comes first, because everything else rests on it.",
    faqs: [
      {
        q: "Do I need to share the details of what happened?",
        a: "No. You decide how much to share and when. Many people start with how they are feeling now rather than with the event itself.",
      },
      {
        q: "Is trauma counselling the same as trauma therapy?",
        a: "The terms are often used interchangeably. What matters more is whether the approach feels safe and useful for you.",
      },
      {
        q: "How long does trauma counselling take?",
        a: "There is no set length. Some people benefit from a few months of focused work; others choose longer-term support. We review progress regularly.",
      },
    ],
  },
  {
    slug: "anxiety-depression-counselling",
    title: "Anxiety & Depression Counselling",
    metaTitle: "Anxiety & Depression Counselling in South Africa (Online & In-Person)",
    description:
      "Counselling online and in-person in South Africa for anxiety, depression and low mood. Practical, evidence-informed support to help you regain control and hope.",
    keywords: ["anxiety counselling", "depression counsellor", "low mood counsellor", "how to stop overthinking", "anxiety counselling South Africa"],
    homeCardTitle: "Emotional Wellbeing, Anxiety and Depression Management",
    intro: [
      "Anxiety and low mood can make ordinary days feel heavy. You might be constantly on edge, stuck in overthinking, struggling to switch off, or feeling flat and unmotivated, sometimes without a clear reason.",
      "Counselling gives you a space to understand what is driving these feelings and to build practical tools you can use between sessions.",
    ],
    whoFor: [
      "People experiencing persistent worry, panic or overthinking",
      "Those feeling low, hopeless, tired or disconnected from things they used to enjoy",
      "People whose anxiety or low mood is affecting work, study or relationships",
      "Anyone looking for support alongside, not instead of, medical care",
    ],
    helpWith: [
      "Recognising anxious and depressive thought patterns",
      "Learning evidence-informed coping and regulation strategies",
      "Managing overthinking and the urge to avoid",
      "Rebuilding routine, energy and motivation",
      "Understanding your triggers and building resilience",
    ],
    sessions:
      "Sessions last 45 minutes to one hour. We start by mapping what you are experiencing and what has helped or hindered in the past. We then work on practical strategies you can try between sessions, reviewing what works and adjusting as we go.",
    approach:
      "My work is evidence-informed and grounded in empathy. I will help you understand your experience and give you tools you can use, with you as the expert on your own life.",
    faqs: [
      {
        q: "How is counselling different from medication?",
        a: "Counselling and medication can work well together. Counselling focuses on understanding and skills. Medication is a medical decision to make with your doctor.",
      },
      {
        q: "Do I need a diagnosis to book?",
        a: "No. You do not need a formal diagnosis. If you are unsure whether counselling is right for you, the free 15-minute consultation is a good place to start.",
      },
      {
        q: "What if I am in crisis?",
        a: "Counselling is not an emergency service. If you are at risk of harming yourself, contact your nearest emergency service or a crisis line straight away. In South Africa, SADAG’s helpline is 0800 567 567 (24 hours).",
      },
    ],
  },
  {
    slug: "addiction-counselling",
    title: "Addiction Counselling",
    metaTitle: "Addiction Counselling in South Africa (Online & In-Person)",
    description:
      "Non-judgemental addiction counselling online and in-person in South Africa, for people in recovery and for loved ones affected by someone else’s addiction.",
    keywords: ["addiction counsellor", "alcohol addiction counselling", "support for a loved one’s addiction", "recovery counselling South Africa"],
    homeCardTitle: "Recovery Support",
    intro: [
      "Addiction affects the person using and everyone around them. Whether you are trying to change your own relationship with alcohol or substances, or you are worried about someone you love, you deserve non-judgemental support.",
      "Counselling can help you understand the roots of addiction, build coping strategies and work towards a recovery that is sustainable for you.",
    ],
    whoFor: [
      "People wanting to reduce or stop alcohol or substance use",
      "People in early or ongoing recovery who want support alongside other programmes or groups",
      "Family members and partners of someone with an addiction",
      "Anyone whose use has started to affect their work, health or relationships",
    ],
    helpWith: [
      "Understanding triggers, cravings and patterns of use",
      "Building healthier ways to cope",
      "Managing shame, guilt and relapse",
      "Repairing trust and communication with loved ones",
      "Setting boundaries that protect your recovery or wellbeing",
    ],
    sessions:
      "Sessions last 45 minutes to one hour, online or in-person. We start with your goals and what you have tried before. Sessions are non-judgemental, and you do not need to feel “ready” to talk.",
    approach:
      "Recovery is rarely a straight line, and a slip is not a failure. We focus on understanding what is happening and on what you want, one step at a time.",
    faqs: [
      {
        q: "Do I need to stop using before starting counselling?",
        a: "No. You can start where you are. Many people come to counselling while still using, and we work with that.",
      },
      {
        q: "Can family members book sessions?",
        a: "Yes. Loved ones affected by someone else’s addiction can book their own sessions. Your support matters in its own right.",
      },
      {
        q: "Is counselling the same as a rehab programme?",
        a: "No. Counselling is one-to-one support. It can sit alongside a programme, a support group or medical treatment.",
      },
    ],
  },
  {
    slug: "couples-counselling",
    title: "Couples & Relationship Counselling",
    metaTitle: "Couples Counselling in South Africa (Online & In-Person)",
    description:
      "Online and in-person couples counselling in South Africa to improve communication, navigate conflict and understand each other more deeply.",
    keywords: ["couples counselling online", "relationship counselling", "couples counselling South Africa", "marriage counselling South Africa"],
    homeCardTitle: "Relationships, Boundaries & Behavioural Patterns",
    intro: [
      "Every relationship goes through difficult seasons. Communication can break down, old hurts resurface, and it can feel like you are having the same argument over and over.",
      "Counselling offers a neutral, structured space to slow things down, understand each other’s needs and find more workable ways to connect.",
    ],
    whoFor: [
      "Couples experiencing frequent conflict or emotional distance",
      "Partners navigating trust issues, infidelity or major life transitions",
      "Couples who want to strengthen communication before problems grow",
      "Individuals who want to explore their relationship patterns and boundaries, with or without a partner",
    ],
    helpWith: [
      "Improving communication and listening",
      "Working through conflict in healthier ways",
      "Understanding each other’s needs and triggers",
      "Rebuilding trust after a breach",
      "Recognising patterns that no longer serve you and making changes",
    ],
    sessions:
      "Sessions last 45 minutes to one hour, online or in-person in Hillcrest, KZN. We start by hearing each person’s perspective and goals. The focus is on understanding the patterns between you rather than deciding who is right.",
    approach:
      "I am neutral and non-judgemental. My aim is not to take sides but to help you understand each other and build a relationship that feels more balanced, honest and connected.",
    faqs: [
      {
        q: "Do both partners need to attend?",
        a: "Not always. I can work with a couple together, or with one partner on their own. We will discuss what makes most sense for you.",
      },
      {
        q: "Can we do couples counselling online?",
        a: "Yes. Both partners need a private space and a stable connection. Many couples find online sessions easier to fit into busy schedules.",
      },
      {
        q: "Is couples counselling only for relationships in crisis?",
        a: "No. Many couples come to counselling to strengthen communication before problems grow.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
