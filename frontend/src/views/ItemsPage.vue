<script setup lang="ts">
import { onMounted } from "vue";
// import { getItems } from "../api";
import { useItemsStore } from "../store/items.store";

const itemsStore = useItemsStore();

onMounted(async () => {
  //   const [items] = await getItems();
  const items = [
    {
      id: "AE-Test-1-1000-1253",
      name: "Dunkin Donuts - Test Card",
      usageInstructions: "",
      termsAndConditions: "",
      giftCardInformation: "",
      brand: "Test",
      currency: "AED",
      fromValue: 1,
      toValue: 1000,
      cardFaceImage:
        "https://distribution.giftlov.com/api/card/c7f3b7dc5ef2b3f351e691c99fac8186205a44219a74eefe42d3a954c7fe3c27/2408/c",
      cardFaceHash:
        "7F4D9C3E1ACE81FB0D9E5089F969E4AF7943A9D6D008AFF33A0C3ED6D402F07D",
      productId: 2408,
      categories: ["Gift Card", "Fast Casual"],
      countryCode: "AE",
    },
    {
      id: "AE-Test-1-6000-1449",
      name: "AE Amazon.ae Gift Card - Test Card",
      usageInstructions:
        '&lt;p class="MsoNormal"&gt;To redeem your gift card, follow these steps: &lt;o:p&gt;&lt;/o:p&gt;&lt;u1:p&gt;&lt;/u1:p&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;&lt;u2:p&gt;&lt;/u2:p&gt;1. Go to &lt;a href="https://www.amazon.ae/your-account"&gt;&lt;span style="color: windowtext;"&gt;https://www.amazon.ae/your-account&lt;/span&gt;&lt;/a&gt; and select \'\'Gift Cards\'\'.&lt;o:p&gt;&lt;/o:p&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;2. Click \'\'Redeem a Gift Card\'\'.&lt;o:p&gt;&lt;/o:p&gt;&lt;u2:p&gt;&lt;/u2:p&gt;&lt;u1:p&gt;&lt;/u1:p&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;3. Enter your claim code and click \'\'Apply to your balance\'\'.&lt;o:p&gt;&lt;/o:p&gt;&lt;u1:p&gt;&lt;/u1:p&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;&lt;b&gt;Note:&lt;/b&gt; If your order total is more than your gift card funds, the extra can be paid for by credit card/debit card.&lt;o:p&gt;&lt;/o:p&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;You can also Redeem your Gift Card balance during the checkout process:&lt;o:p&gt;&lt;/o:p&gt;&lt;u2:p&gt;&lt;/u2:p&gt;&lt;u1:p&gt;&lt;/u1:p&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;1. Click \'\'Proceed to Checkout\'\' for after you\'ve reviewed the items in your Shopping Cart.&lt;span style="font-size: 1rem;"&gt; If prompted, sign in to your account.&lt;/span&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;u1:p&gt;&lt;/u1:p&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;&lt;u2:p&gt;&lt;/u2:p&gt;2. Select your shipping address, and choose a shipping method.&lt;o:p&gt;&lt;/o:p&gt;&lt;u2:p&gt;&lt;/u2:p&gt;&lt;u1:p&gt;&lt;/u1:p&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;3. Select payment method by checking the box next to \'\'Use your X.XX AED Gift card balance\'\'.&lt;o:p&gt;&lt;/o:p&gt;&lt;u2:p&gt;&lt;/u2:p&gt;&lt;u1:p&gt;&lt;/u1:p&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;&lt;u1:p&gt;&lt;/u1:p&gt;&lt;u2:p&gt;&lt;/u2:p&gt;&lt;/p&gt;&lt;p class="MsoNormal"&gt;&lt;b&gt;Note&lt;/b&gt;&lt;span times="" new="" roman";mso-fareast-theme-font:minor-fareast;="" mso-no-proof:yes"=""&gt;: If you select the Cash on Delivery payment option, the full amount will need to be paid to the courier and no amount will be taken from your Gift card balance. Uncheck the box next to Use your X.XX AED Gift card balance if you would like to save it for another occasion.&lt;/span&gt;&lt;/p&gt;',
      termsAndConditions:
        "&lt;p&gt;Amazon.ae is not responsible if a Gift Card is lost, stolen, destroyed or used without permission. Your Amazon.ae Balance cannot be used to purchase other Gift Cards, prepaid open loop cards, or certain third-party gift cards. Gift Cards cannot be reloaded; resold; used for payment outside of www.amazon.ae or its affiliated properties; used for unauthorized advertising, marketing, sweepstakes, promotional or commercial purposes, including to facilitate the resale or shipment of goods from Amazon.ae; redeemed for more than face value; transferred for value; redeemed for cash; returned for a cash refund (except to the extent required by law); or used in a manner otherwise prohibited by our Amazon.ae Gift Card Restrictions and Prohibited Activities policy. No portion of your Amazon.ae Balance may be transferred to another Amazon.ae account. Neither your Amazon.ae Balance nor your Gift Cards may be applied to the purchase of goods or services at any Amazon-affiliated property outside of the United Arab Emirates. See www.amazon.ae/gc-legal for complete terms and conditions. Sold and delivered by Souq.com FZ LLC., an Amazon company.&lt;br&gt;&lt;/p&gt;",
      giftCardInformation:
        "&lt;p&gt;Use your Amazon.ae Gift Card towards books, electronics, music, and more. The Amazon.ae website is the place to find and discover almost any thing you want to buy online at a great price.&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;All Amazon.ae Gift Cards expire ten years from their date of issuance.&lt;/p&gt;",
      brand: "Test",
      currency: "AED",
      fromValue: 1,
      toValue: 6000,
      cardFaceImage:
        "https://distribution.giftlov.com/api/card/1829ed39ddd42f5433917067bde0a97c793b83f97de83376d5bfff86af10343b/2605/c",
      cardFaceHash:
        "F7E37B338469A791F152CF92A08B59DF9EE6FFB1C06C7E5AAE23E25FA329238C",
      productId: 2605,
      categories: ["Gift Card", "E-Commerce"],
      countryCode: "AE",
    },
    {
      id: "JO-Test-1-1000-2123",
      name: "Jawaker",
      usageInstructions: "&lt;p&gt;EN Usage Instruction &lt;/p&gt;",
      termsAndConditions: "&lt;p&gt;EN T&Cs&lt;/p&gt;",
      giftCardInformation: "&lt;p&gt;EN GC Information&lt;/p&gt;",
      brand: "Test",
      currency: "JOD",
      fromValue: 1,
      toValue: 1000,
      cardFaceImage:
        "https://distribution.giftlov.com/api/card/3b0f914e38abc717fe9feb2967b898f4bcbdab5de25ea7d77fda03a448a1c52b/3306/c",
      cardFaceHash:
        "585CC75FA81C1AD6F137FBB2861E72969DF591027CAA384D370CBCBDA1878386",
      productId: 3306,
      categories: ["e-commerce perfume shop", "Gift Card"],
      countryCode: "JO",
    },
    {
      id: "US-Test-1-1000-1251",
      name: "XBOX - Test Card",
      usageInstructions:
        '&lt;p class="Pa11" style="margin-bottom: 5pt;"&gt;&lt;span class="A6"&gt;&lt;span calibri",sans-serif;mso-ascii-theme-font:="" minor-latin;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"segoe="" pro""="" style="font-size: 10pt;"&gt;Have an account on Xbox Live? Simply log in to your account on &lt;/span&gt;&lt;/span&gt;&lt;a href="file:///C:/Users/40758/Downloads/www.xbox.com/redeemcode"&gt;&lt;span calibri",sans-serif;="" mso-ascii-theme-font:minor-latin;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:="" "segoe="" pro""="" style="font-size: 10pt;"&gt;www.xbox.com/redeemcode&lt;/span&gt;&lt;/a&gt;&lt;span class="A6"&gt;&lt;span calibri",sans-serif;mso-ascii-theme-font:="" minor-latin;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"segoe="" pro""="" style="font-size: 10pt;"&gt;, and enter the 25-digit code.&lt;/span&gt;&lt;/span&gt;&lt;span style="font-size: 10pt; font-family: Calibri, sans-serif;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p class="Pa11" style="margin-bottom: 5pt;"&gt;&lt;span class="A6"&gt;&lt;span calibri",sans-serif;mso-ascii-theme-font:="" minor-latin;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"segoe="" pro""="" style="font-size: 10pt;"&gt;Need to get an account? Go to &lt;/span&gt;&lt;/span&gt;&lt;a href="file:///C:/Users/40758/Downloads/www.xbox.com/live" style="color: rgb(39, 57, 193);"&gt;&lt;span calibri",sans-serif;mso-ascii-theme-font:="" minor-latin;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"segoe="" pro""="" style="font-size: 10pt;"&gt;www.xbox.com/live&lt;/span&gt;&lt;/a&gt;&lt;span class="A6"&gt;&lt;span calibri",sans-serif;="" mso-ascii-theme-font:minor-latin;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:="" "segoe="" pro""="" style="font-size: 10pt;"&gt; and follow the steps to create a new account. Then enter the 25-digit code.&lt;/span&gt;&lt;/span&gt;&lt;span style="font-size: 10pt; font-family: Calibri, sans-serif;"&gt;&lt;o:p&gt;&lt;/o:p&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p class="Pa11" style="margin-bottom: 5pt;"&gt;&lt;span class="A6"&gt;&lt;span calibri",sans-serif;mso-ascii-theme-font:="" minor-latin;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"segoe="" pro""="" style="font-size: 10pt;"&gt;For more information on how to redeem codes on your Xbox 360 and Xbox One, visit &lt;/span&gt;&lt;/span&gt;&lt;a href="file:///C:/Users/40758/Downloads/www.xbox.com/howtoredeem-console"&gt;&lt;span calibri",sans-serif;mso-ascii-theme-font:minor-latin;mso-hansi-theme-font:="" minor-latin;mso-bidi-font-family:"segoe="" pro""="" style="font-size: 10pt;"&gt;www.xbox.com/howtoredeem-console&lt;/span&gt;&lt;/a&gt;&lt;span class="A6"&gt;&lt;span calibri",sans-serif;="" mso-ascii-theme-font:minor-latin;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:="" "segoe="" pro""="" style="font-size: 10pt;"&gt;.&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;',
      termsAndConditions:
        '&lt;p class="MsoNormal" style="margin-bottom: 10pt; line-height: 10.05pt;"&gt;* Works with Windows 10 PCs, tablets and phones, Windows 8.1, Windows Phone 8, Xbox One and Xbox 360 (Xbox Live required). Not redeemable on earlier versions. Music: Only for purchase of tracks, albums and music pass on Windows 10 and Windows 8.1 PCs and tablets, or music pass on Xbox One (Xbox Live required).&lt;o:p&gt;&lt;/o:p&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p class="MsoNormal" style="margin-bottom: 10pt; line-height: 10.05pt;"&gt;Once redeemed to your U.S. Microsoft account, the full code value will be applied and may be used for eligible purchases (exclusions apply) made directly at select Microsoft digital stores. Eligible purchases and prices vary by region, device, and over time. Geography limitations, country and balance restrictions, taxes, and Internet connection fees may apply. Paid subscriptions required for some content. You must be 13+. Except as required by law, codes cannot be redeemed or exchanged for cash and are not reloadable or refundable. To create a new Microsoft account or to read full terms and conditions (which may change without notice), go to &lt;a href="file:///C:/Users/40758/Downloads/microsoft.com/cardterms"&gt;microsoft.com/cardterms&lt;/a&gt;. Void where prohibited or restricted by law. Cards and codes issued by and ©/™/® Microsoft Corp, a Washington Corporation, and/or its affiliates.&lt;/p&gt;',
      giftCardInformation:
        '&lt;p&gt;&lt;span style="font-size: 13.3333px;"&gt;Get an Xbox gift card for games and entertainment on Xbox and Windows. Buy the latest games, map packs, movies, TV, music, apps and more.* And on Xbox One, buy and download full blockbuster games the day they’re available everywhere. Great as a gift, allowance, or credit card alternative.&lt;/span&gt;&lt;br&gt;&lt;/p&gt;',
      brand: "Test",
      currency: "USD",
      fromValue: 1,
      toValue: 1000,
      cardFaceImage:
        "https://distribution.giftlov.com/api/card/43928ed2cef40a05e526ca478f1c29b33485a03da8f12f66614d4d97cd631cc4/2406/c",
      cardFaceHash:
        "43AF69D37776F94357467967A94F0F676D8734A1D67A82DAC96CDEA4F410098B",
      productId: 2406,
      categories: ["Digital Content", "Gaming"],
      countryCode: "US",
    },
    {
      id: "US-Test-1-1000-1252",
      name: "Free Fire",
      usageInstructions:
        '&lt;p&gt;&lt;strong&gt;To Redeem:&lt;/strong&gt;&lt;/p&gt;&lt;ol&gt;&lt;li&gt;You’ll need a Skype Account to redeem your credit. Don’t have one? &lt;a href="https://www.skype.com/go/joinskype"&gt;Sign up&lt;/a&gt; for free.&lt;/li&gt;&lt;li&gt;Click on &lt;a href="https://www.skype.com/go/voucher"&gt;redeem your card&lt;/a&gt; and input the voucher number that appears on the back of the Skype Card.&lt;/li&gt;&lt;li&gt;Enjoy using your credit. No commitments – simply buy more later from any &lt;a href="https://support.skype.com/faq/FA34553/"&gt;participating retail store&lt;/a&gt; if you need it.&lt;/li&gt;&lt;/ol&gt;',
      termsAndConditions:
        '&lt;p&gt;Use of this card constitutes acceptance of the following terms: Card can be used to purchase Skype products and available items at &lt;a href="http://skype.com/"&gt;skype.com&lt;/a&gt;. Broadband connection and Skype account required for redemption. Skype\'s terms of service at &lt;a href="http://skype.com/tos"&gt;skype.com/tos&lt;/a&gt; apply. Terms can change without notice at any time.&lt;/p&gt;&lt;p&gt;Card\'s face value is in US dollars. Card does not expire. No cash redemption, except where required by law. Protect this card like cash. Issuer is not responsible for lost or stolen cards or any unauthorized card use. Issuer will not replace or refund lost or stolen cards. If your purchase exceeds the available balance on the card, you must pay for the excess amount at time of purchase. Visit &lt;a href="http://skype.com/"&gt;skype.com&lt;/a&gt; for balance information and other card related inquiries.&lt;/p&gt;&lt;p&gt;Card cannot be used for emergency calls. Skype is not a telephone replacement service. PLEASE TREAT THIS CARD LIKE CASH AND SAFEGUARD IT ACCORDINGLY.&lt;/p&gt;',
      giftCardInformation:
        "&lt;p&gt;Enjoy Skype’s great paid features with a little Skype Credit. Call mobiles and landlines worldwide at low rates, send text messages from just a few cents and get online at over two million WiFi hotspots. Make a lot of calls? You can also use your credit to buy a subscription and get our lowest calling rates to over 170 countries.  &lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;",
      brand: "Test",
      currency: "USD",
      fromValue: 1,
      toValue: 1000,
      cardFaceImage:
        "https://distribution.giftlov.com/api/card/81015cb412f7665a30c3490baa097ead1e91ad4c499ea758cae20d2418498730/2407/c",
      cardFaceHash:
        "DC823A63B0F9595A246BDF5F680CCFDE410BEA03BEC57C6FD08FBBC1FABA99D7",
      productId: 2407,
      categories: ["Media"],
      countryCode: "US",
    },
  ];
  if (items) itemsStore.setItems(items);
});

function toDisplayableHtmlText(text: string) {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}
</script>

<template>
  <div class="items-container">
    <div class="munero-item" v-for="item in itemsStore.items" :key="item.id">
      <div class="munero-item-info">
        <label>{{ item.name }}</label>
        <div class="categories">
          <div class="category" v-for="category in item.categories">
            {{ category }}
          </div>
        </div>
        <p v-html="toDisplayableHtmlText(item.giftCardInformation)"></p>
        <div class="spacer"></div>
        <v-btn variant="outlined">Place order</v-btn>
      </div>
      <img :src="item.cardFaceImage" />
    </div>
  </div>
</template>

<style lang="scss">
.items-container {
  padding: 24px 0px;
  max-width: 720px;
  margin: 0px auto;

  .munero-item {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 24px;

    .munero-item-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      justify-self: flex-start;

      label {
        font-size: 18px;
        font-weight: 500;
      }

      .categories {
        display: flex;
        gap: 8px;

        .category {
          background: lightgray;
          font-weight: 300;
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 100vw;
          letter-spacing: 0.4px;
        }
      }

      p {
        font-size: 14px;
        line-height: 150%;
        display: -webkit-box;
        max-width: 320px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 8px 0px;

        :not(:first-child) {
          display: none;
        }
      }
    }

    img {
      align-self: flex-start;
      max-width: 320px;
    }
  }
}

@media only screen and (max-width: 900px) {
  .munero-item {
    flex-direction: column;
    margin-bottom: 32px !important;
    padding-bottom: 32px;
    border-bottom: 1px solid lightgray;

    .munero-item-info {
      align-items: center !important;
    }

    img {
      align-self: center !important;
    }
  }
}
</style>
