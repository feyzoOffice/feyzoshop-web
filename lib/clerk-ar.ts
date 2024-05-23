/*
 * =====================================================================================
 * DISCLAIMER:
 * =====================================================================================
 * This localization file is a community contribution and is not officially maintained
 * by Clerk. It has been provided by the community and may not be fully aligned
 * with the current or future states of the main application. Clerk does not guarantee
 * the accuracy, completeness, or timeliness of the translations in this file.
 * Use of this file is at your own risk and discretion.
 * =====================================================================================
 */

import type { LocalizationResource } from "@clerk/types";

export const arSA: LocalizationResource = {
  locale: "ar-SA",
  backButton: "الرجوع",
  badge__default: "الإفتراضي",
  badge__otherImpersonatorDevice: "جهاز منتحل آخر",
  badge__primary: "الرئيسي",
  badge__requiresAction: "الإجراء المطلوب",
  badge__thisDevice: "هذا الجهاز",
  badge__unverified: "لم يتم التحقق منه",
  badge__userDevice: "جهاز المستخدم",
  badge__you: "أنت",
  createOrganization: {
    formButtonSubmit: "أنشاء مؤسسة",
    invitePage: {
      formButtonReset: "تخطي",
    },
    title: "أنشاء مؤسسة",
  },
  dates: {
    lastDay: "الأمس في {{ date | timeString('en-US') }}",
    next6Days:
      "{{ date | weekday('en-US','long') }} في {{ date | timeString('en-US') }}",
    nextDay: "غدا في {{ date | timeString('en-US') }}",
    numeric: "{{ date | numeric('en-US') }}",
    previous6Days:
      "أخر {{ date | weekday('en-US','long') }} في {{ date | timeString('en-US') }}",
    sameDay: "اليوم في {{ date | timeString('en-US') }}",
  },
  dividerText: "أو",
  footerActionLink__useAnotherMethod: "أختر طريقة أخرى",
  footerPageLink__help: "المساعدة",
  footerPageLink__privacy: "الخصوصية",
  footerPageLink__terms: "الشروط",
  formButtonPrimary: "متابعة",
  formButtonPrimary__verify: "Verify",
  formFieldAction__forgotPassword: "نسيت كلمة المرور؟",
  formFieldError__matchingPasswords: "كلمة المرور مطابقة",
  formFieldError__notMatchingPasswords: "كلمة المرور لا تتطابق",
  formFieldError__verificationLinkExpired:
    "صلاحية رمز التأكيد أنتهت. يرجى طلب رابط جديد",
  formFieldHintText__optional: "إختياري",
  formFieldHintText__slug:
    "A slug is a human-readable ID that must be unique. It’s often used in URLs.",
  formFieldInputPlaceholder__backupCode: "",
  formFieldInputPlaceholder__confirmDeletionUserAccount: "Delete account",
  formFieldInputPlaceholder__emailAddress: "",
  formFieldInputPlaceholder__emailAddress_username: "",
  formFieldInputPlaceholder__emailAddresses:
    "أدخل أو لصق عنوان بريد إلكتروني واحد أو أكثر ، مفصولة بمسافات أو فواصل",
  formFieldInputPlaceholder__firstName: "",
  formFieldInputPlaceholder__lastName: "",
  formFieldInputPlaceholder__organizationDomain: "",
  formFieldInputPlaceholder__organizationDomainEmailAddress: "",
  formFieldInputPlaceholder__organizationName: "",
  formFieldInputPlaceholder__organizationSlug: "",
  formFieldInputPlaceholder__password: "",
  formFieldInputPlaceholder__phoneNumber: "",
  formFieldInputPlaceholder__username: "",
  formFieldLabel__automaticInvitations: "تمكين الدعوة الأوتماتكية لهذا النطاق",
  formFieldLabel__backupCode: "الرمز الأحتياطي",
  formFieldLabel__confirmDeletion: "تأكيد",
  formFieldLabel__confirmPassword: "تأكيد كلمة المرور",
  formFieldLabel__currentPassword: "كلمة المرور الحالية",
  formFieldLabel__emailAddress: "العنوان الإلكتروني",
  formFieldLabel__emailAddress_username: "العنوان الإلكتروني أو اسم المستخدم",
  formFieldLabel__emailAddresses: "العناوين الإلكترونية",
  formFieldLabel__firstName: "الاسم الأول",
  formFieldLabel__lastName: "الاسم الأخير",
  formFieldLabel__newPassword: "كلمة المرور الجديدة",
  formFieldLabel__organizationDomain: "النطاق",
  formFieldLabel__organizationDomainDeletePending:
    "حذف الدعوات والأقتراحات المعلقة",
  formFieldLabel__organizationDomainEmailAddress:
    "عنوان البريد الإلكتروني للتحقق",
  formFieldLabel__organizationDomainEmailAddressDescription:
    "أدخل البريد الإلكتروني الخاص بالنطاق للحصول على  الرمز والتحقق من النطاق",
  formFieldLabel__organizationName: "اسم المؤسسة",
  formFieldLabel__organizationSlug: "رابط المؤسسة",
  formFieldLabel__passkeyName: undefined,
  formFieldLabel__password: "كلمة المرور",
  formFieldLabel__phoneNumber: "رقم الجوال",
  formFieldLabel__role: "دور",
  formFieldLabel__signOutOfOtherSessions: "تسجيل الخروج من جميع الأجهزة",
  formFieldLabel__username: "اسم المستخدم",
  impersonationFab: {
    action__signOut: "تسجيل الخروج",
    title: "تسجيل الدخول بإسم {{identifier}}",
  },
  maintenanceMode: undefined,
  membershipRole__admin: "المسؤول",
  membershipRole__basicMember: "عضو",
  membershipRole__guestMember: "ضيف",
  organizationList: {
    action__createOrganization: "إنشاء مؤسسة",
    action__invitationAccept: "إنضمام",
    action__suggestionsAccept: "طلب إنضمام",
    createOrganization: "إنشاء مؤسسة",
    invitationAcceptedLabel: "انضميت",
    subtitle: "للمتابعة إلى {{applicationName}}",
    suggestionsAcceptedLabel: "موافقة معلقة",
    title: "إختر حساب",
    titleWithoutPersonal: "إختر مؤسسة",
  },
  organizationProfile: {
    badge__automaticInvitation: "دعوات تلقائية",
    badge__automaticSuggestion: "إقتراحات تلقائية",
    badge__manualInvitation: "ليس هناك تسجيل تلقائي",
    badge__unverified: "لم يتم التحقق منها",
    createDomainPage: {
      subtitle:
        "أضف النطاق للتحقق. المستخدِمون الذين لديهم عناوين بريد إلكتروني على هذا النطاق يمكنهم تسجيل الدخول إلى المؤسسة بشكل تلقائي أو طلب الأنضمام.",
      title: "إضافة نطاق",
    },
    invitePage: {
      detailsTitle__inviteFailed:
        "لا يمكن إرسال الدعوات. انظر لتفاصيل المشكلة وحاول مرة أخرى:",
      formButtonPrimary__continue: "إرسال الدعوات",
      selectDropdown__role: "حدد الدور",
      subtitle: "دعوة أعضاء جدد لهذه المؤسسة",
      successMessage: "تم إرسال الدعوات بنجاح",
      title: "دعوة أعضاء",
    },
    membersPage: {
      action__invite: "دعوة",
      activeMembersTab: {
        menuAction__remove: "إزالة عضو",
        tableHeader__actions: "",
        tableHeader__joined: "انضم",
        tableHeader__role: "دور",
        tableHeader__user: "مستخدم",
      },
      detailsTitle__emptyRow: "لا يوجد أعضاء للعرض",
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            "قم بدعوة المستخدمين عن طريق توصيل نطاق بريد إلكتروني بمنظمتك. سيتمكن أي شخص يقوم بالتسجيل في مجال بريد إلكتروني مطابق من الانضمام إلى المؤسسة في أي وقت.",
          headerTitle: "الدعوات التلقائية",
          primaryButton: "إدارة النطاقات الموثوقة",
        },
        table__emptyRow: "لا دعوات للعرض",
      },
      invitedMembersTab: {
        menuAction__revoke: "سحب الدعوة",
        tableHeader__invited: "مدعو",
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            "سيتمكن المستخدمون الذين يشتركون في مجال بريد إلكتروني مطابق من رؤية اقتراح لطلب الانضمام إلى المؤسسة.",
          headerTitle: "اقتراحات تلقائية",
          primaryButton: "إدارة النطاقات التي تم التحقق منها",
        },
        menuAction__approve: "قبول",
        menuAction__reject: "رفض",
        tableHeader__requested: "طلب الأنضمام",
        table__emptyRow: "لا توجد طلبات للعرض",
      },
      start: {
        headerTitle__invitations: "الدعوات",
        headerTitle__members: "الأعضاء",
        headerTitle__requests: "الطلبات",
      },
    },
    navbar: {
      description: "إدر مؤسستك",
      general: "عام",
      members: "الأعضاء",
      title: "المؤسسة",
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription: "إكتب {{organizationName}} بالأسفل للمتابعة.",
          messageLine1: "هل أنت متأكد من أنك تريد حذف هذه المؤسسة",
          messageLine2: "هذا القرار نهائي ولا يمكن التراجع عنه.",
          successMessage: "لقد حذفت هذه المؤسسة",
          title: "حذف المؤسسة",
        },
        leaveOrganization: {
          actionDescription: "إكتب {{organizationName}} للمتابعة",
          messageLine1:
            "هل أنت متاكد أنك تريد الخروج من المؤسسة؟ سوف تفقد الصلاحيات لهذه المؤسسة وجميع تطبيقاتها",
          messageLine2: "هذا القرار نهائي ولا يمكن التراجع عنه.",
          successMessage: "لقد غادرت المؤسسة",
          title: "الخروج من المؤسسة",
        },
        title: "خطر",
      },
      domainSection: {
        menuAction__manage: "إدارة",
        menuAction__remove: "حذف",
        menuAction__verify: "تحقق",
        primaryButton: "إضافة نطاق",
        subtitle:
          "السماح للمستخدمين بالأنضمام للمؤسسة بشكل تلقائي أو عن طريق دعوة للأنضمام على نطاق بريد إلكتروني تم التحقق منه",
        title: "النطاقات التي تم التحقق منها",
      },
      successMessage: "تم تحديث معلومات المؤسسة",
      title: "الملف الشخصي للمؤسسة",
    },
    removeDomainPage: {
      messageLine1: "سيتم حذف نطاق البريد الإلكتروني هذا{{domain}}.",
      messageLine2:
        "لن يتمكن المستخدمون من الانضمام إلى المؤسسة تلقائياً بعد ذلك.",
      successMessage: "تم حذف هذا النطاق {{domain}}.",
      title: "حذف النطاق",
    },
    start: {
      headerTitle__general: "عام",
      headerTitle__members: "الأعضاء",
      profileSection: {
        primaryButton: "",
        title: "ملف المؤسسة",
        uploadAction__title: "اللوجو",
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel: "حذف هذا النطاق سيؤثر على المستخدمين المدعوين",
        removeDomainActionLabel__remove: "حذف النطاق",
        removeDomainSubtitle: "حذف هذا النطاق من النطاقات المعتمدة",
        removeDomainTitle: "حذف النطاق",
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          "تتم دعوة المستخدمين تلقائياً للإنضمام إلى المؤسسة عند تسجيل حساب جديد ويمكنهم الإنضمام في أي وقت.",
        automaticInvitationOption__label: "الدعوات التلقائية",
        automaticSuggestionOption__description:
          "يتلقى المستخدمون اقتراحاً لطلب الانضمام ، ولكن يجب أن يوافق عليه المشرف قبل أن يتمكنوا من اللإنضمام إلى المؤسسة.",
        automaticSuggestionOption__label: "إقتراحات تلقائية",
        calloutInfoLabel:
          "إن تغيير وضع التسجيل سيؤثر فقط على المستخدمين الجدد.",
        calloutInvitationCountLabel:
          "هناك {{count}} دعوة معلقة مرسلة إلى المستخدمين",
        calloutSuggestionCountLabel:
          "هناك {{count}} أقتراح معلق مرسلة إلى المستخدمين",
        manualInvitationOption__description:
          "يمكن دعوة المستخدمين يدوياً فقط للمؤسسة.",
        manualInvitationOption__label: "لا يوجد تسجيل تلقائي",
        subtitle:
          "إختر كيف يمكن للمستخدمين في هذا النطاق تسجيل الدخول إلى المؤسسة",
      },
      start: {
        headerTitle__danger: "خطر",
        headerTitle__enrollment: "خيارات التسجيل",
      },
      subtitle:
        "هذا النطاق {{domain}} موثوق الآن. يمكنك المتابعة وأختيار وضع التسجيل.",
      title: "حدِّث {{domain}}",
    },
    verifyDomainPage: {
      formSubtitle: "أدخل رمز التحقق المرسل إلى بريدك الإلكتروني",
      formTitle: "رمز التحقق",
      resendButton: "لم يصلك الرمز؟ حاول مرة أخرى",
      subtitle:
        "يجب التحقق من هذا النطاق {{domainName}} عن طريق بريد إلكتروني موثوق",
      subtitleVerificationCodeScreen:
        "تم إرسال رمز تحقق إلى {{emailAddress}}. أدخل الرمز للمتابعة.",
      title: "التحقق من النطاق",
    },
  },
  organizationSwitcher: {
    action__createOrganization: "إنشاء مؤسسة",
    action__invitationAccept: "إنضمام",
    action__manageOrganization: "إدارة المؤسسة",
    action__suggestionsAccept: "طلب إنضمام",
    notSelected: "لم يتم إختيار مؤسسة",
    personalWorkspace: "الحساب الشخصي",
    suggestionsAcceptedLabel: "موافقة معلقة",
  },
  paginationButton__next: "التالي",
  paginationButton__previous: "السابق",
  paginationRowText__displaying: "عرض",
  paginationRowText__of: "من",
  signIn: {
    accountSwitcher: {
      action__addAccount: "أضف حساب",
      action__signOutAll: "تسجيل الخروج من جميع الحسابات",
      subtitle: "إختر الحساب الذي تريد الإكمال به",
      title: "إختر حساب",
    },
    alternativeMethods: {
      actionLink: "الحصول على المساعدة",
      actionText: "ليس لديك أي من هذه؟",
      blockButton__backupCode: "استخدم رمز النسخ الاحتياطي",
      blockButton__emailCode: "رمز البريد الإلكتروني ل  {{identifier}}",
      blockButton__emailLink: "رابط البريد الإلكتروني ل {{identifier}}",
      blockButton__passkey: undefined,
      blockButton__password: "تسجيل الدخول بكلمة السر الخاصة بك",
      blockButton__phoneCode: "أرسال رسالة نصية ل{{identifier}}",
      blockButton__totp: "استخدم تطبيق المصادقة الخاص بك",
      getHelp: {
        blockButton__emailSupport: "بريد الدعم الفني",
        content:
          "إذا كنت تواجه صعوبة في تسجيل الدخول إلى حسابك ، راسلنا عبر البريد الإلكتروني وسنعمل معك لاستعادة الوصول في أقرب وقت ممكن.",
        title: "الحصول على المساعدة",
      },
      subtitle: "هل تواجه مشاكل؟ يمكنك استخدام أي من هذه الطرق لتسجيل الدخول.",
      title: "أستخدام طريقة أخرى",
    },
    backupCodeMfa: {
      subtitle: "للمتابعة إلى {{applicationName}}",
      title: "أدخل الرمز الأحتياطي",
    },
    emailCode: {
      formTitle: "رمز التحقق",
      resendButton: "لم يصلك اي رمز؟ حاول مرة أخرى.",
      subtitle: "للمتابعة إلى {{applicationName}}",
      title: "التحقق من البريد الإلكتروني",
    },
    emailLink: {
      expired: {
        subtitle: "ارجع إلى علامة التبويب الرئيسية للمتابعة.",
        title: "انتهت صلاحية رابط التحقق هذا.",
      },
      failed: {
        subtitle: "ارجع إلى علامة التبويب الرئيسية للمتابعة.",
        title: "رابط التحقق هذا غير صالح",
      },
      formSubtitle: "أستعمل رابط التحقق المرسل إلى بريدك الإلكتروني",
      formTitle: "رابط التحقق",
      loading: {
        subtitle: "ستتم إعادة توجيهك قريبًا",
        title: "تسجيل الدخول...",
      },
      resendButton: "لم يصلك الرابط؟ حاول مرة أخرى",
      subtitle: "للمتابعة إلى {{applicationName}}",
      title: "التحقق من البريد الإلكتروني",
      unusedTab: {
        title: "يمكنك أغلاق هذه النافذة",
      },
      verified: {
        subtitle: "سيتم أعادة توجيهك في لحظات",
        title: "تم تسجيل الحساب بنجاح",
      },
      verifiedSwitchTab: {
        subtitle: "ارجع إلى علامة التبويب الرئيسية للمتابعة",
        subtitleNewTab: "ارجع إلى علامة التبويب المفتوحة حديثًا للمتابعة",
        titleNewTab: "تم تسجيل الدخول في علامة تبويب أخرى",
      },
    },
    forgotPassword: {
      formTitle: "رمز تحقق لأعادة تعيين كلمة المرور",
      resendButton: "لم يصلك اي رمز؟ حاول مرة أخرى.",
      subtitle: "لإعادة تعيين كلمة المرور الخاصة بك",
      subtitle_email: "أولاً، أدخل الرمز الذي تم إرساله إلى بريدك الإلكتروني",
      subtitle_phone: "أولاً، قم بإدخال الرمز الذي تم إرساله إلى هاتفك",
      title: "إعادة تعيين كلمة المرور",
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: "إعادة تعيين كلمة المرور",
      label__alternativeMethods: "أو سجل الدخول بطريقة أخرى",
      title: "نسيت كلمة المرور؟",
    },
    noAvailableMethods: {
      message: "لا يمكن متابعة تسجيل الدخول. لا يوجد وسيلة مصادقة متاحة.",
      subtitle: "حدث خطأ",
      title: "لا يمكن تسجيل الدخول",
    },
    passkey: {
      subtitle:
        "استخدم مفتاح المرور الخاص بك للتأكد من هويتك. قد يطلب جهازك رمز بصمة الإصبع أو الوجه أو قفل الشاشة.",
      title: "إستخدم مفتاح المرور",
    },
    password: {
      actionLink: "إستخدم طريقة أخرى",
      subtitle: "للمتابعة إلى {{applicationName}}",
      title: "أدخل كلمة المرور",
    },
    passwordPwned: {
      title: "تم اختراق كلمة المرور",
    },
    phoneCode: {
      formTitle: "رمز التحقق",
      resendButton: "لم يصلك الرمز؟ حاول مرة أخرى",
      subtitle: "للمتابعة إلى {{applicationName}}",
      title: "تحقق من هاتفك",
    },
    phoneCodeMfa: {
      formTitle: "رمز التحقق",
      resendButton: "لم يصلك الرمز؟ حاول مرة أخرى",
      subtitle: "للمتابعة، يرجى إدخال رمز التحقق المرسل إلى هاتفك",
      title: "تحقق من هاتفك",
    },
    resetPassword: {
      formButtonPrimary: "إعادة تعيين كلمة المرور",
      requiredMessage:
        "يوجد حساب بالفعل بهذا البريد الإلكتروني لم يتم التحقق منه. الرجاء إعادة تعيين كلمة المرور لتأمين حسابك",
      successMessage:
        "تم تغيير كلمة المرور بنجاح. جارِ تسجيل الدخول الرجاء الإنتظار قليلا.",
      title: "إعادة تعيين كلمة المرور",
    },
    resetPasswordMfa: {
      detailsLabel: "نريد التحقق من هويتك قبل إعادة تعيين كلمة المرور",
    },
    start: {
      actionLink: "إنشاء حساب جديد",
      actionLink__use_email: "استخدم البريد الإلكتروني",
      actionLink__use_email_username:
        "استخدم البريد الإلكتروني أو اسم المستخدم",
      actionLink__use_passkey: "استخدم مفتاح المرور بدلاً من ذلك",
      actionLink__use_phone: "استخدم رقم الجوال",
      actionLink__use_username: "استخدم اسم المستخدم",
      actionText: "ليس لديك حساب؟",
      subtitle: "للمتابعة إلى {{applicationName}}",
      title: "تسجيل الدخول",
    },
    totpMfa: {
      formTitle: "رمز التحقق",
      subtitle:
        "للمتابعة، يرجى إدخال رمز التحقق الذي تم إنشاؤه بواسطة تطبيق المصادقة الخاص بك",
      title: "نظام التحقق بخطوتين",
    },
  },
  signInEnterPasswordTitle: "إدخل كلمة المرور",
  signUp: {
    continue: {
      actionLink: "تسجيل الدخول",
      actionText: "ليس لديك حساب؟",
      subtitle: "للمتابعة إلى {{applicationName}}",
      title: "املأ الحقول المفقودة",
    },
    emailCode: {
      formSubtitle: "أدخل رمز التحقق المرسل إلى بريدك الإلكتروني",
      formTitle: "رمز التحقق",
      resendButton: "لم يصلك الرمز؟ حاول مرة أخرى",
      subtitle: "للمتابعة إلى {{applicationName}}",
      title: "تحقق من بريدك الإلكتروني",
    },
    emailLink: {
      formSubtitle: "أستعمل رابط التحقق المرسل إلى بريدك الإلكتروني",
      formTitle: "رابط التحقق",
      loading: {
        title: "إنشاء حساب...",
      },
      resendButton: "لم يصلك الرابط؟ حاول مرة أخرى",
      subtitle: "للمتابعة إلى {{applicationName}}",
      title: "التحقق من البريد الإلكتروني",
      verified: {
        title: "تم إنشاء الحساب بنجاح",
      },
      verifiedSwitchTab: {
        subtitle: "ارجع إلى علامة التبويب المفتوحة حديثًا للمتابعة",
        subtitleNewTab: "ارجع إلى علامة التبويب السابقة للمتابعة",
        title: "تم التحقق بنجاح من البريد الإلكتروني",
      },
    },
    phoneCode: {
      formSubtitle: "أدخل رمز التحقق المرسل إلى هاتفك",
      formTitle: "رمز التحقق",
      resendButton: "لم يصلك الرمز؟ حاول مرة أخرى",
      subtitle: "للمتابعة إلى {{applicationName}}",
      title: "تحقق من هاتفك",
    },
    start: {
      actionLink: "تسجيل الدخول",
      actionText: "لديك حساب بالفعل؟",
      subtitle: "للمتابعة إلى {{applicationName}}",
      title: "أنشاء حساب جديد",
    },
  },
  socialButtonsBlockButton: "للمتابعة مع {{provider|titleize}}",
  unstable__errors: {
    captcha_invalid:
      "لا يمكن تسجيل الحساب بسبب مشاكل تحقق أمنية. الرجاء تحديث الصفحة للمحاولة مرة أخرى أو تواصل معنا للمزيد من المساعدة",
    captcha_unavailable:
      "Sign up unsuccessful due to failed bot validation. Please refresh the page to try again or reach out to support for more assistance.",
    form_code_incorrect: "",
    form_identifier_exists: "",
    form_identifier_exists__email_address: undefined,
    form_identifier_exists__phone_number: undefined,
    form_identifier_exists__username: undefined,
    form_identifier_not_found: "",
    form_param_format_invalid: "",
    form_param_format_invalid__email_address: "يجب أستعمال بريد إلكتروني صالح",
    form_param_format_invalid__phone_number:
      "Phone number must be in a valid international format",
    form_param_max_length_exceeded__first_name:
      "الأسم الأول يجب الا يتجاوز 256 حرف",
    form_param_max_length_exceeded__last_name:
      "الأسم الأخير يجب الا يتجاوز 256 حرف",
    form_param_max_length_exceeded__name: "الأسم يجب الا يتجاوز 256 حرف",
    form_param_nil: "",
    form_password_incorrect: "",
    form_password_length_too_short: "",
    form_password_not_strong_enough: "كلمة المرور ليست قوية",
    form_password_pwned:
      "لا يمكن أستعمال كلمة السر هذه لانها غير أمنة, الرجاء اختيار كلمة مرور أخرى",
    form_password_pwned__sign_in: undefined,
    form_password_size_in_bytes_exceeded:
      "تجاوزت كلمة المرور الحد الأقصى للحروف المدخلة, الرجاء أدخال كلمة مرور أقصر أو حذف بعض الأحرف الخاصة",
    form_password_validation_failed: "كلمة مرور خاطئة",
    form_username_invalid_character: "",
    form_username_invalid_length: "",
    identification_deletion_failed: "لا يمكن حذف هويتك الآخيرة ",
    not_allowed_access: "",
    passkey_already_exists: undefined,
    passkey_not_supported: undefined,
    passkey_pa_not_supported: undefined,
    passkey_registration_cancelled: undefined,
    passkey_retrieval_cancelled: undefined,
    passwordComplexity: {
      maximumLength: "أقل من {{length}} حروف",
      minimumLength: "{{length}} حروف أو أكثر",
      requireLowercase: "حرف صغير",
      requireNumbers: "رقم",
      requireSpecialCharacter: "حرف خاص",
      requireUppercase: "حرف كبير",
      sentencePrefix: "كلمة السر يجب أن تحتوي على",
    },
    phone_number_exists: "هذا الرقم مأخوذ الرجاء أختيار رقم آخر",
    zxcvbn: {
      couldBeStronger:
        "كلمة مرورك سليمة من الأفضل ان تكون اقوى. الرجاء أضافة حروف أكثر",
      goodPassword: "كلمة مرورك طابقت جميع المتطلبات الازمة",
      notEnough: "كلمة المرور ليست قوية",
      suggestions: {
        allUppercase: "أستعمل حروف كبيرة لبعض الحروف وليس كلها.",
        anotherWord: "أضف المزيد من الكلمات الأقل شيوعًا.",
        associatedYears: "تجنب السنوات المرتبطة بك.",
        capitalization: "أستعمل حروف كبيرة لأكثر من حرف غير الحرف الأول",
        dates: "تجنب التواريخ والسنوات المرتبطة بك.",
        l33t: 'تجنب بدائل الحروف التي يمكن التنبؤ بها مثل "a" ل "@" ',
        longerKeyboardPattern:
          "أستخدم أنماط أكثر وقم بتغيير أتجاه الكتابة في لوحة المفاتيح عدة مرات",
        noNeed:
          "يمكنك إنشاء كلمات مرور قوية دون استخدام الرموز أو الأرقام أو الأحرف الكبيرة.",
        pwned:
          "إذا كنت تستخدم كلمة المرور هذه في مكان آخر ، فيجب عليك تغييرها.",
        recentYears: "تجنب السنوات الأخيرة.",
        repeated: "تجنب الكلمات والحروف المتكررة.",
        reverseWords: "تجنب التهجئات العكسية للكلمات الشائعة.",
        sequences: "تجنب تسلسل الأحرف الشائعة.",
        useWords: "استخدم كلمات متعددة ، ولكن تجنب العبارات الشائعة.",
      },
      warnings: {
        common: "كلمة السر هذه شائعة في الأستخدام",
        commonNames: "من السهل تخمين الأسماء والألقاب الشائعة",
        dates: "من السهل تخمين التواريخ",
        extendedRepeat: 'من السهل تخمين أنماط الحروف المتكررة مثل "abcabcabc"',
        keyPattern: "من السهل تخمين أنماط لوحة المفاتيح الصغيرة",
        namesByThemselves: "من السهل تخمين الأسم الأول أو اللقب",
        pwned: "كلمة المرور الخاص بك تم أختراقها والكشف عنها في الأنترنت",
        recentYears: "من السهل تخمين السنوات الحديثة",
        sequences: 'من السهل تخمين أنماط الحروف العامة أو الهجائية مثل "abc" ',
        similarToCommon:
          "كلمة السر هذه مشابهة لكلمات السر الشائعة في الأستخدام",
        simpleRepeat: 'من السهل تخمين الحروف المكررة مثل "aaa"',
        straightRow:
          "من السهل تخمين الحروف الموجودة على نفس السطر في لوحة المفاتيح",
        topHundred: "كلمة السر هذه مستخدمة بشكل متكررة",
        topTen: "كلمة السر هذه مستخدمة بكثرة",
        userInputs:
          "يجب ألا يكون هناك أي بيانات شخصية أو بيانات ذات صلة بالصفحة.",
        wordByItself: "من السهل تخميل الكلمات المنفردة",
      },
    },
  },
  userButton: {
    action__addAccount: "إضافة حساب",
    action__manageAccount: "إدارة الحساب",
    action__signOut: "تسجيل الخروج",
    action__signOutAll: "تسجيل الخروج من جميع الحسابات",
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: "تم النسخ",
      actionLabel__copy: "نسخ الكل",
      actionLabel__download: "تحميل ملف .txt",
      actionLabel__print: "طباعة",
      infoText1: "سيتم تفعيل رموز النسخ الأحتياطي لهذا الحساب",
      infoText2:
        "قم بتخزين الرموز في مكان آمن وحافظ على سريتها. يمكنك تجديد الرموز الأحتياطية اذا كنت تشك أن حسابك معرض للخطر",
      subtitle__codelist: "قم بتخزين الرموز في مكان آمن وابقيها سرا.",
      successMessage:
        "رموز النسخ الأحتياطي مفعلة الآن. يمكنك أستعمال واحدة من هذه الرموز لتسجيل الدخول إلى حسابك, اذا فقدت الوصول إلى جهاز المصادقة الخاص بك. كل رمز يمكن أستعماله لمرة واحدة فقط.",
      successSubtitle:
        "يمكنك أستعمال واحدة من هذه الرموز لتسجيل الدخول إلى حسابك, اذا فقدت الوصول إلى جهاز المصادقة الخاص بك",
      title: "إضافة التحقق عن طريق الرموز الأحتياطية",
      title__codelist: "رموز النسخ الأحتياطي",
    },
    connectedAccountPage: {
      formHint: "أختر موفر خدمة لتوصيل حسابك",
      formHint__noAccounts: "لا يوجد موفرين خدمة لتوصيل حسابك",
      removeResource: {
        messageLine1: "سيتم حذف هذا الموفر من حسابك {{identifier}}",
        messageLine2:
          "لن تتمكن بعد الآن من استخدام هذا الحساب المتصل ولن تعمل أي ميزات تابعة.",
        successMessage: "تم حذف هذا العنوان من حسابك {{connectedAccount}}",
        title: "حذف الحساب المتصل",
      },
      socialButtonsBlockButton: "إضافة الموفر {{provider|titleize}} لحسابك",
      successMessage: "تمت إضافة موفر الخدمة الى حسابك",
      title: "أضف حساب متصل",
    },
    deletePage: {
      actionDescription: "أكتب حذف حساب بالأسفل للمتابعة",
      confirm: "حذف حساب",
      messageLine1: "هل أنت من انك تريد حذف هذا الحساب؟",
      messageLine2: "هذا القرار نهائي ولا يمكن التراجع عنه.",
      title: "حذف الحساب",
    },
    emailAddressPage: {
      emailCode: {
        formHint:
          "سيتم إرسال بريد إلكتروني يحتوي على رمز التحقق لهذا البريد الإلكتروني",
        formSubtitle: "أرسل رمز التحقق المرسل إلى {{identifier}}",
        formTitle: "رمز التحقق",
        resendButton: "لم يصلك الرمز؟ حاول مرة أخرى",
        successMessage: "البريد الإلكتروني {{identifier}} تمت إضافته إلى حسابك",
      },
      emailLink: {
        formHint:
          "سيتم إرسال بريد إلكتروني يحتوي على رمز التحقق لهذا البريد الإلكتروني",
        formSubtitle:
          "أنقر على رابط التحقق المرسل إلى البريد الألكتروني {{identifier}}",
        formTitle: "رابط التحقق",
        resendButton: "لم يصلك الرابط؟ حاول مرة أخرى",
        successMessage: "البريد الإلكتروني {{identifier}} تمت إضافته إلى حسابك",
      },
      removeResource: {
        messageLine1: "سيتم حذف هذا الإيميل من حسابك {{identifier}}",
        messageLine2:
          "لن تتمكن من تسجيل الدخول باستخدام عنوان البريد الإلكتروني هذا.",
        successMessage: "تم حذف هذا العنوان من حسابك {{emailAddress}}",
        title: "حذف عنوان البريد الإلكتروني هذا",
      },
      title: "أضافة البريد الإلكتروني",
      verifyTitle: "Verify email address",
    },
    formButtonPrimary__add: "إضافة",
    formButtonPrimary__continue: "متابعة",
    formButtonPrimary__finish: "انهاء",
    formButtonPrimary__remove: "حذف",
    formButtonPrimary__save: "حفظ",
    formButtonReset: "إلغاء",
    mfaPage: {
      formHint: "أختر طريقة للأضافة",
      title: "أضافة التحقق بخطوتين",
    },
    mfaPhoneCodePage: {
      backButton: "استخدم الرقم الموجود",
      primaryButton__addPhoneNumber: "إضافة رقم جوال",
      removeResource: {
        messageLine1:
          "لن يتم إستلام اي رموز تحقق على {{identifier}} عند تسجيل الدخول",
        messageLine2: "قد لا يكون حسابك آمنا. هل أنك متأكد أنك تريد المتابعة؟",
        successMessage:
          "تم إلغاء التحقق بخطوتين عن طريق الرسائل النصية لرقم الجوال هذا {{mfaPhoneCode}}",
        title: "إزالة التحقق بخطوتين",
      },
      subtitle__availablePhoneNumbers:
        "أختر رقم جوال لأضافة التحقق بخطوتين عن طريق الرسائل النصية",
      subtitle__unavailablePhoneNumbers:
        "لا يوجد رقم جوال لأضافة التحقق بخطوتين عن طريق الرسائل النصية",
      successMessage1:
        "عند تسجيل الدخول، ستحتاج إلى إدخال رمز التحقق الذي تم إرساله إلى رقم الهاتف هذا كخطوة إضافية.",
      successMessage2:
        "احفظ هذه الرموز الاحتياطية وقم بتخزينها في مكان آمن. إذا فقدت إمكانية الوصول إلى جهاز المصادقة الخاص بك، فيمكنك استخدام الرموز الاحتياطية لتسجيل الدخول.",
      successTitle: "تم تمكين التحقق من رمز الرسائل القصيرة",
      title: "أضافة التحقق عن طريق رمز الرسائل النصية",
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: "مسح رمز الQR بدلا من ذلك",
        buttonUnableToScan__nonPrimary: "لا يمكنك مسح رمز الQR?",
        infoText__ableToScan:
          "قم بإعداد طريقة تسجيل دخول جديدة في تطبيق المصادقة و قم بمسح كود الQR لربطه بحسابك",
        infoText__unableToScan:
          "قم بإعداد تسجيل دخول جديدة في تطبيق المصادقة وأدخل الرمز المقدم أدناه",
        inputLabel__unableToScan1:
          "تأكد من تفعيل كلمات المرور المستندة إلى الوقت أو الأستعمال الواحد, ثم أكمل ربط حسابك",
        inputLabel__unableToScan2:
          "بدلا من ذلك, إذا كان المصدق الخاص بك يدعم روابط المدعومة من طرق المستندة إلى الوقت أو الأستعمال الواحد, يمكنك نسخ الرابط كله",
      },
      removeResource: {
        messageLine1:
          "رموز التحقق من برنامج المصادقة هذا ستكون غير ضروية عند تسجيل الدخول",
        messageLine2: "قد لا يكون حسابك آمنا. هل أنك متأكد أنك تريد المتابعة؟",
        successMessage: "تم أزالة طريقة التحقق بخطوتين من تطبيق المصادقة",
        title: "إزالة التحقق بخطوتين",
      },
      successMessage:
        "تم تمكين التحقق بخطوتين اللآن. عند تسجيل الدخول سوف يطلب منك أدخال رمز التحقق من تطبيق المصادقة الخاص بك",
      title: "إضافة تطبيق مصادقة",
      verifySubtitle: "أدخل رمز التحقق المنشئ في تطبيق المصادقة",
      verifyTitle: "رمز التحقق",
    },
    mobileButton__menu: "القائمة",
    navbar: {
      account: "الملف الشخصي",
      description: "إدارة معلومات حسابك الشخصي.",
      security: "الأمن",
      title: "الحساب",
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: undefined,
        title: undefined,
      },
      subtitle__rename: undefined,
      title__rename: undefined,
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        "يوصى بتسجيل الخروج من جميع الأجهزة الأخرى التي ربما استخدمت كلمة المرور القديمة الخاصة بك.",
      readonly:
        "لا يمكن تعديل كلمة المرور لأنه لا يمكنك تسجيل الدخول إلى عن طريق حساب المؤسسة",
      successMessage__set: "تم تعيين كلمة السر.",
      successMessage__signOutOfOtherSessions:
        "تم تسجيل الخروج من جميع الأجهزة.",
      successMessage__update: "تم تحديث كلمة السر",
      title__set: "تعيين كلمة المرور",
      title__update: "تغيير كلمة المرور",
    },
    phoneNumberPage: {
      infoText:
        "سيتم إرسال رسالة نصية تحتوي على رابط التحقق إلى رقم الهاتف هذا.",
      removeResource: {
        messageLine1: "سيتم حذف هذا الإيميل من حسابك {{identifier}}",
        messageLine2: "لن تتمكن من تسجيل الدخول بإستخدام رقم الجوال هذا",
        successMessage: "تم حذف هذا العنوان من حسابك {{phoneNumber}}",
        title: "حذف رقم الجوال",
      },
      successMessage: "تم إضافة رقم الجوال هذا {{identifier}}",
      title: "إضافة رقم جوال",
      verifySubtitle: "Enter the verification code sent to {{identifier}}",
      verifyTitle: "Verify phone number",
    },
    profilePage: {
      fileDropAreaHint:
        "أرفع صورة بصيغة JPG, PNG, GIF أو WEBP أقل من 10 ميغابايت",
      imageFormDestructiveActionSubtitle: "حذف صورة الملف الشخصي",
      imageFormSubtitle: "رفع صورة للملف الشخصي",
      imageFormTitle: "صورة الملف الشخصي",
      readonly: "تم توفير معلومات حسابك عن طريق حساب المؤسسة ولا يمكن تعديلها",
      successMessage: "معلومات حسابك الشخصي تم تحديثها",
      title: "تحديث الملف الشخصي",
    },
    start: {
      activeDevicesSection: {
        destructiveAction: "قم بتسجيل الخروج من الجهاز",
        title: "الأجهزة النشطة",
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: "حاول مرة أخرى",
        actionLabel__reauthorize: "أعطى الصلاحية الآن",
        destructiveActionTitle: "حذف",
        primaryButton: "ربط حساب",
        subtitle__reauthorize:
          "The required scopes have been updated, and you may be experiencing limited functionality. Please re-authorize this application to avoid any issues",
        title: "الحسابات المتصلة",
      },
      dangerSection: {
        deleteAccountButton: "حذف الحساب",
        title: "خطر",
      },
      emailAddressesSection: {
        destructiveAction: "أحذف البريد الإلكتروني",
        detailsAction__nonPrimary: "تعيين كبريد رئيسي",
        detailsAction__primary: "التحقق الكامل",
        detailsAction__unverified: "تحقق من البريد الإلكتروني",
        primaryButton: "أضافة عنوان إلكتروني",
        title: "العنوان الإلكتروني",
      },
      enterpriseAccountsSection: {
        title: "حساب المؤسسات",
      },
      headerTitle__account: "الحساب",
      headerTitle__security: "الأمان",
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: "تجديد رموز النسخ الاحتياطي",
          headerTitle: "رموز النسخ الاحتياطي",
          subtitle__regenerate:
            "احصل على مجموعة جديدة من رموز النسخ الاحتياطي الآمنة. سيتم حذف رموز النسخ الاحتياطي السابقة ولا يمكن استخدامها.",
          title__regenerate: "تجديد رموز النسخ الاحتياطي",
        },
        phoneCode: {
          actionLabel__setDefault: "تعيين كأفتراضي",
          destructiveActionLabel: "حذف رقم الجوال",
        },
        primaryButton: "إضافةالتحقق بخطوتين",
        title: "التحقق بخطوتين",
        totp: {
          destructiveActionTitle: "حذف",
          headerTitle: "تطبيق المصادقة",
        },
      },
      passkeysSection: {
        menuAction__destructive: undefined,
        menuAction__rename: undefined,
        title: undefined,
      },
      passwordSection: {
        primaryButton__setPassword: "تعيين كلمة المرور",
        primaryButton__updatePassword: "تغيير كلمة المرور",
        title: "كلمة المرور",
      },
      phoneNumbersSection: {
        destructiveAction: "حذف رقم الجوال",
        detailsAction__nonPrimary: "تعيين كرئيسي",
        detailsAction__primary: "التحقق الكامل",
        detailsAction__unverified: "تحقق من رقم الجوال",
        primaryButton: "إضافة رقم جوال",
        title: "رقم الجوال",
      },
      profileSection: {
        primaryButton: "",
        title: "الملف الشخصي",
      },
      usernameSection: {
        primaryButton__setUsername: "تعيين اسم المستخدم",
        primaryButton__updateUsername: "تغيير اسم المستخدم",
        title: "اسم المستخدم",
      },
      web3WalletsSection: {
        destructiveAction: "حذف المحفظة",
        primaryButton: "محافظ Web3",
        title: "محافظ Web3",
      },
    },
    usernamePage: {
      successMessage: "تم تحديث اسم المستخدم",
      title__set: "تحديث اسم المستخدم",
      title__update: "تحديث اسم المستخدم",
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: "سيتم حذف هذه المحفظة من حسابك{{identifier}}",
        messageLine2:
          "لن تتمكن من تسجيل الدخول إلى الحساب بإستخدام محفظة web3 هذه",
        successMessage: "تم حذف هذه المحفظة من حسابك{{web3Wallet}}",
        title: "حذف محفظة web3",
      },
      subtitle__availableWallets: "أختر محفظة web3 لتوصيلها بحسابك",
      subtitle__unavailableWallets: "لا توجد اي محفظة web3 متاحة",
      successMessage: "تمت إضافة المحفظة الى حسابك.",
      title: "إضافة محفظة web3",
    },
  },
} as const;
