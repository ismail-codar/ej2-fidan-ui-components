import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

import * as data from "./dataSource.json";

import { SfButton } from "../components/Button";
import { SfAccordion } from "../components/Accordion";
import { SfTab } from "../components/Tab";
import { SfAutoComplete } from "../components/AutoComplete";
import { SfBarcodeGenerator } from "../components/BarcodeGenerator";
import { ValidateEvent } from "@syncfusion/ej2-barcode-generator";
import { SfCalendar } from "../components/Calendar";
import { ChangedEventArgs } from "@syncfusion/ej2-calendars";

const view1: any = (
  <div>
    <h1>Button</h1>
    <SfButton isPrimary={true}>Test</SfButton>
    <h1>Accordion</h1>
    <SfAccordion
      items={[
        {
          header: "ASP.NET",
          expanded: true,
          content:
            "Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables the separation of application logic and user interface."
        },
        {
          header: "ASP.NET MVC",
          content:
            "The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for creating Web applications. The ASP.NET MVC framework is a lightweight, highly testable presentation framework that (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages and membership-based authentication."
        },
        {
          header: "JavaScript",
          content:
            "JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.More recently, however, it has become common in both game development and the creation of desktop applications."
        }
      ]}
    />
    <h1>Tab</h1>
    <SfTab
      items={[
        {
          header: { text: "Twitter", iconCss: "e-twitter" },
          content:
            "Twitter is an online social networking service that enables users to send and read short 140-character " +
            'messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read ' +
            "them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San " +
            "Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, " +
            "Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, " +
            "with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion " +
            "search queries per day."
        },
        {
          header: { text: "Facebook", iconCss: "e-facebook" },
          content:
            "Facebook is an online social networking service headquartered in Menlo Park, California. Its website was " +
            "launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo " +
            "Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website's " +
            "membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford " +
            "University. It gradually added support for students at various other universities and later to high-school students."
        },
        {
          header: { text: "WhatsApp", iconCss: "e-whatsapp" },
          content:
            "WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates " +
            "under a subscription business model. It uses the Internet to send text messages, images, video, user location and " +
            "audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user " +
            "base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in " +
            "Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion."
        }
      ]}
    />
    <h2>AutoComplete</h2>
    <SfAutoComplete
      dataSource={(data as any).sportsData}
      placeholder="e.g. Basketball"
    />
    <h1>BarcodeGenerator</h1>
    <SfBarcodeGenerator
      width="200px"
      height="150px"
      type="Ean13"
      value="9735940564824"
      mode="SVG"
    />
    <h1>Calendar</h1>
    <SfCalendar change={(args: ChangedEventArgs) => console.log(args)} />
  </div>
);

const appMain = document.getElementById("app");
appMain.appendChild(view1);
