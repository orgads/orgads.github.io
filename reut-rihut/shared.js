// פונקציות משותפות לכל הדפים

// יצירת סקציית סרטון YouTube
function createYouTubeSection(videoId) {
  if (!videoId) {
    return ``;
  }

  return `
    <div class="video-section" style="margin: 20px 0;">
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000; border-radius: 12px;">
            <iframe
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;"
                src="https://www.youtube.com/embed/${videoId}"
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>
    </div>
    `;
}

// יצירת סקציית תרומות
function createDonationSection() {
  return `
        <div class="section" style="text-align:center; margin: 32px 0;">
            <span class="icon">⚜️</span> התרומות מוכרות לצורכי מס (סעיף 46).
        </div>

        <div class="section">
            <div class="ways-title">דרכי תרומה</div>
            <div class="bank-details">
                <strong>העברה בנקאית</strong><br>
                בנק פאג"י (52), סניף 176, חשבון 580754<br>
                על שם: קהילת נחלת משה אלעד
            </div>
            <div class="credit-details">
                <strong>בכרטיס אשראי (ללא תפיסת מסגרת)</strong><br>
                <a href="https://cutt.ly/nahalat" target="_blank">https://cutt.ly/nahalat</a><br>
                <span style="color:#b48e5c; font-weight:bold;">חשוב:</span> לאחר לחיצה על הקישור, יש ללחוץ על <strong>"קהילת נחלת משה"</strong> או על הלוגו:<br>
                <div style="margin-top:10px; text-align:center;">
                    <a href="https://cutt.ly/nahalat" target="_blank">
                        <img src="nahalat.png" alt="צילום מסך - לחיצה על נחלת משה" style="max-width:280px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.08); cursor:pointer;">
                    </a>
                </div>
                <br>
                <span style="color:#b48e5c; font-weight:bold;">לתשומת לבכם:</span> אם בחרתם לשלם בתשלומים, יש לבחור <strong>הוראת קבע</strong> ולא עסקת תשלומים. עסקת תשלומים תופסת מסגרת אשראי וגם כרוכה בעמלה מיותרת.<br>
                <div style="margin-top:10px; text-align:center;">
                    <a href="https://cutt.ly/nahalat" target="_blank">
                        <img src="horaat-keva.jpg" alt="צילום מסך הוראת קבע" style="max-width:240px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.08); cursor:pointer;">
                    </a>
                </div>
            </div>
            <div class="supplier-details">
                <strong>ישירות לספק (ללא קבלה מזכה במס)</strong><br>
                תעשיות רהיטים לביא<br>
                בנק לאומי לישראל (10), סניף 745, חשבון 17200085
            </div>
        </div>

        <div class="contact">
            📌 נא לשלוח אסמכתא בווטסאפ למספר <a href="https://wa.me/972535653563" target="_blank" style="color:#25d366; font-weight:bold; text-decoration:none;"><strong>053-5653563</strong></a> או במייל <a href="mailto:shavit.dudy@gmail.com">shavit.dudy@gmail.com</a>
        </div>
    `;
}

// יצירת כותרת עם לוגו
function createHeader(logoSrc = "reut.png", altText = "רעות") {
  return `
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="${logoSrc}" alt="${altText}" style="height: 80px; width: auto;">
        </div>
    `;
}

// יצירת סקציית כסאות
function createChairsSection(showFoundersMessage = false) {
  const foundersMessage = showFoundersMessage ? `
        <div class="section" style="background: #f0f9ff; padding: 16px; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-weight: 500;">
                <strong>לחברי הקהילה הוותיקים:</strong> אתם הייתם חלק מהמסע של הקהילה הרבה שנים. עכשיו יש לכם הזדמנות להמשיך לתמוך ולעזור לקהילה שהייתם חלק ממנה. כל תרומה תעזור לחזק ולשפר את מקום התפילה והלימוד.
            </p>
        </div>
    ` : '';

  return `
        <div class="project-card">
            <div style="text-align:center; margin-bottom: 24px;">
                <img src="reut-rihut.jpg" alt="תמונה של הכיסאות החדשים" style="max-width:320px; width:100%; border-radius:14px; box-shadow:0 2px 12px rgba(0,0,0,0.07);">
            </div>
            <h2>🪑 כסאות חדשים לבית הכנסת</h2>

            <div class="amount-display">
                <div class="amount-label">סה"כ נדרש</div>
                <div class="main-amount">₪14,400</div>
                <div class="amount-label">12 כסאות חדשים ב-1,200 ש"ח כ"א</div>
            </div>

            <div class="progress-bar">
                <div class="progress-fill" style="width: 0%"></div>
                <div class="progress-text">בואו נתחיל!</div>
            </div>

            <div class="section">
                כל כסא ניתן להקדיש <span class="highlight">לעילוי נשמת יקיר, לרפואה שלמה או להצלחה</span>, ובכך להשאיר חותם נצחי בבית הכנסת.
            </div>

            ${foundersMessage}
        </div>
    `;
}

// יצירת סקציית ריהוט חדר שיעורים
function createClassroomSection() {
  return `
        <div class="project-card">
            <h2>📚 ריהוט חדר שיעורים</h2>

            <div class="section" style="background: #f0f9ff; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 0; color: #1e40af; font-weight: 500;">
                    מרחב רב-שימושי המשמש כעזרת נשים בתפילות וכחדר שיעורים -
                    עם אפשרות לסידור כסאות גמיש לפי הצורך
                </p>
            </div>

            <div class="amount-display">
                <div class="amount-label">סה"כ נדרש</div>
                <div class="main-amount">₪22,000</div>
                <div class="amount-label">אלפי שקלים</div>
            </div>

            <div class="progress-bar">
                <div class="progress-fill" style="width: 15%"></div>
                <div class="progress-text">התחלנו!</div>
            </div>

            <div class="details-list">
                <div class="detail-item">
                    <span>ריהוט</span>
                    <span style="font-weight: bold;">10 אש"ח</span>
                </div>
                <div class="detail-item">
                    <span>סגירה באלומניום</span>
                    <span style="font-weight: bold;">9 אש"ח</span>
                </div>
                <div class="detail-item">
                    <span>סגירת דלת</span>
                    <span style="font-weight: bold;">3 אש"ח</span>
                </div>
                <div class="detail-item">
                    <span>סה"כ</span>
                    <span>22 אש"ח</span>
                </div>
            </div>

            <div class="blueprint-section">
                <h3 style="color: #1e40af; margin-bottom: 15px;">📋 הדמיות הסידור במרחב</h3>
                <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                    <div style="text-align: center;">
                        <img src="women-1.jpg" alt="סידור עזרת נשים" style="max-width: 300px; width: 100%; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.1);">
                        <p style="margin-top: 8px; font-weight: bold; color: #1e40af;">סידור לתפילות (עזרת נשים)</p>
                    </div>
                    <div style="text-align: center;">
                        <img src="women-2.jpg" alt="סידור חדר שיעורים" style="max-width: 300px; width: 100%; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,0.1);">
                        <p style="margin-top: 8px; font-weight: bold; color: #1e40af;">סידור לשיעורים</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// יצירת סקציית ריצוף
function createFlooringSection() {
  return `
        <div class="project-card">
            <h2>🏗️ ריצוף לבית הכנסת</h2>

            <div class="amount-display">
                <div class="amount-label">סה"כ נדרש</div>
                <div class="main-amount">₪30,000</div>
                <div class="amount-label">אלפי שקלים</div>
            </div>

            <div class="progress-bar">
                <div class="progress-fill" style="width: 5%"></div>
                <div class="progress-text">התחלנו!</div>
            </div>

            <div class="details-list">
                <div class="detail-item">
                    <span>כמות מרצפות</span>
                    <span style="font-weight: bold;">300 יחידות</span>
                </div>
                <div class="detail-item">
                    <span>גודל מרצפת</span>
                    <span style="font-weight: bold;">60×60 ס"מ</span>
                </div>
                <div class="detail-item">
                    <span>מחיר למרצפת</span>
                    <span style="font-weight: bold;">₪100</span>
                </div>
                <div class="detail-item">
                    <span>סה"כ</span>
                    <span>30 אש"ח</span>
                </div>
            </div>
        </div>
    `;
}

// טעינת התוכן כשהדף נטען
function loadSharedContent() {
  const headerElement = document.getElementById('header-container');
  if (headerElement) {
    headerElement.innerHTML = createHeader();
  }

  const videoElement = document.getElementById('video-container');
  if (videoElement) {
    const videoId = document.body.getAttribute('data-video-id');
    videoElement.innerHTML = createYouTubeSection(videoId);
  }

  const donationElement = document.getElementById('donation-container');
  if (donationElement) {
    donationElement.innerHTML = createDonationSection();
  }

  const chairsElement = document.getElementById('chairs-container');
  if (chairsElement) {
    const isFoundersPage = document.body.classList.contains('founders-page');
    chairsElement.innerHTML = createChairsSection(isFoundersPage);
  }

  const classroomElement = document.getElementById('classroom-container');
  if (classroomElement) {
    classroomElement.innerHTML = createClassroomSection();
  }

  const flooringElement = document.getElementById('flooring-container');
  if (flooringElement) {
    flooringElement.innerHTML = createFlooringSection();
  }
}
