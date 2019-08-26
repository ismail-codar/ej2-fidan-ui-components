import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

import * as data from "./dataSource.json";
import * as chipsData from "./chipsData.json";

import { SfButton } from "../components/Button";
import { SfAccordion } from "../components/Accordion";
import { SfTab } from "../components/Tab";
import { SfAutoComplete } from "../components/AutoComplete";
import { SfBarcodeGenerator } from "../components/BarcodeGenerator";
import { SfCalendar } from "../components/Calendar";
import { ChangedEventArgs } from "@syncfusion/ej2-calendars";
import { ILoadedEventArgs } from "@syncfusion/ej2-charts";
import { SfChart } from "../components/Chart";
import { SfChipList } from "../components/ChipList";
import { SfCircularGauge } from "../components/CircularGauge";
import { SfColorPicker } from "../components/ColorPicker";
import { SfComboBox } from "../components/ComboBox";
import { SfContextMenu } from "../components/ContextMenu";
import { SfDashboardLayout } from "../components/DashboardLayout";
import { SfDatePicker } from "../components/DatePicker";
import { SfDateRangePicker } from "../components/DateRangePicker";
import { SfDateTimePicker } from "../components/DateTimePicker";
import { SfTimePicker } from "../components/TimePicker";
import { SfSidebar } from "../components/Sidebar";

import "./sidebar/sidebar.css";
import { SidebarDemo } from "./sidebar/Sidebar";

const view1: any = (
  <div>
    {/* <h1>Button</h1>
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
    <h1>Chart</h1>
    <SfChart
      {...{
        //Initializing Primary X Axis
        primaryXAxis: {
          valueType: "DateTime",
          labelFormat: "y",
          majorGridLines: { width: 0 },
          intervalType: "Years",
          edgeLabelPlacement: "Shift"
        },

        //Initializing Primary Y Axis
        primaryYAxis: {
          title: "Revenue in Millions",
          labelFormat: "{value}M",
          interval: 1,
          lineStyle: { width: 0 },
          majorTickLines: { width: 0 }
        },
        chartArea: {
          border: {
            width: 0
          }
        },
        //Initializing Chart Series
        series: [
          {
            type: "Area",
            dataSource: [
              { x: new Date(2000, 0, 1), y: 4 },
              { x: new Date(2001, 0, 1), y: 3.0 },
              { x: new Date(2002, 0, 1), y: 3.8 },
              { x: new Date(2003, 0, 1), y: 3.4 },
              { x: new Date(2004, 0, 1), y: 3.2 },
              { x: new Date(2005, 0, 1), y: 3.9 }
            ],
            xName: "x",
            width: 2,
            yName: "y",
            name: "Product A",
            opacity: 0.5
          },
          {
            type: "Area",
            dataSource: [
              { x: new Date(2000, 0, 1), y: 2.6 },
              { x: new Date(2001, 0, 1), y: 2.8 },
              { x: new Date(2002, 0, 1), y: 2.6 },
              { x: new Date(2003, 0, 1), y: 3 },
              { x: new Date(2004, 0, 1), y: 3.6 },
              { x: new Date(2005, 0, 1), y: 3 }
            ],
            xName: "x",
            width: 2,
            yName: "y",
            name: "Product B",
            opacity: 0.5
          }
        ],
        //Initializing Chart title
        title: "Average Sales Comparison",
        width: "100%",
        load: (args: ILoadedEventArgs) => {}
      }}
    />
    <h1>Chips</h1>
    <SfChipList
      {...{
        chips: chipsData.choiceData,
        selection: "Single",
        cssClass: "e-outline",
        selectedChips: [1]
      }}
    />
    <h1>CircularGauge</h1>
    <SfCircularGauge
      {...{
        // custom code end
        axes: [
          {
            radius: "80%",
            startAngle: 230,
            endAngle: 130,
            majorTicks: {
              width: 0
            },
            lineStyle: { width: 8 },
            minorTicks: {
              width: 0
            },
            labelStyle: {
              font: {
                fontFamily: "Roboto",
                size: "12px",
                fontWeight: "Regular"
              },
              offset: -5
            },
            pointers: [
              {
                value: 60,
                radius: "60%",
                pointerWidth: 7,
                cap: {
                  radius: 8,
                  border: { width: 0 }
                },
                needleTail: {
                  length: "25%"
                }
              }
            ]
          }
        ]
      }}
    />
    <h1>ColorPicker</h1>
    <SfColorPicker
      {...{
        value: "#008000",
        mode: "Palette",
        modeSwitcher: false,
        inline: true,
        showButtons: false,
        change: e => console.log(e)
      }}
    />
    <h1>CompoBox</h1>
    <SfComboBox
      {...{
        popupHeight: "230px",
        index: 2,
        placeholder: "Select a game",
        change: e => console.log(e)
      }}
    />
    <h1>ContextMenu</h1>
    <div id="contextmenutarget">
      Right click/Touch hold to open the ContextMenu
    </div>
    <ul id="contextmenu" />
    <SfContextMenu
      {...{
        target: "#contextmenutarget",
        items: [
          {
            text: "Cut",
            iconCss: "e-cm-icons e-cut"
          },
          {
            text: "Copy",
            iconCss: "e-cm-icons e-copy"
          },
          {
            text: "Paste",
            iconCss: "e-cm-icons e-paste",
            items: [
              {
                text: "Paste Text",
                iconCss: "e-cm-icons e-pastetext"
              },
              {
                text: "Paste Special",
                iconCss: "e-cm-icons e-pastespecial"
              }
            ]
          },
          {
            separator: true
          },
          {
            text: "Link",
            iconCss: "e-cm-icons e-link"
          },
          {
            text: "New Comment",
            iconCss: "e-cm-icons e-comment"
          }
        ],
        // Event triggers while rendering each menu item where “Link” menu item is disabled
        beforeItemRender: args => {
          // if (args.item.text === 'Link') {
          //     args.element.classList.add('e-disabled');
          // }
        }
      }}
    />
    <h1>DashboardLayout</h1>
    <SfDashboardLayout
      {...{
        view: "#defaultLayout",
        cellSpacing: [10, 10],
        allowResizing: true,
        columns: 5
      }}
    >
      <div
        id="one"
        class="e-panel"
        data-row="0"
        data-col="0"
        data-sizeX="1"
        data-sizeY="1"
      >
        <span id="close" class="e-template-icon e-clear-icon" />
        <div class="e-panel-container">
          <div class="text-align">0</div>
        </div>
      </div>
      <div
        id="two"
        class="e-panel"
        data-row="1"
        data-col="0"
        data-sizeX="1"
        data-sizeY="2"
      >
        <span id="close" class="e-template-icon e-clear-icon" />
        <div class="e-panel-container">
          <div class="text-align">1</div>
        </div>
      </div>
      <div
        id="three"
        class="e-panel"
        data-row="0"
        data-col="1"
        data-sizeX="2"
        data-sizeY="2"
      >
        <span id="close" class="e-template-icon e-clear-icon" />
        <div class="e-panel-container">
          <div class="text-align">2</div>
        </div>
      </div>
      <div
        id="four"
        class="e-panel"
        data-row="2"
        data-col="1"
        data-sizeX="1"
        data-sizeY="1"
      >
        <span id="close" class="e-template-icon e-clear-icon" />
        <div class="e-panel-container">
          <div class="text-align">3</div>
        </div>
      </div>
      <div
        id="five"
        class="e-panel"
        data-row="2"
        data-col="2"
        data-sizeX="2"
        data-sizeY="1"
      >
        <span id="close" class="e-template-icon e-clear-icon" />
        <div class="e-panel-container">
          <div class="text-align">4</div>
        </div>
      </div>
      <div
        id="six"
        class="e-panel"
        data-row="0"
        data-col="3"
        data-sizeX="1"
        data-sizeY="1"
      >
        <span id="close" class="e-template-icon e-clear-icon" />
        <div class="e-panel-container">
          <div class="text-align">5</div>
        </div>
      </div>
      <div
        id="seven"
        class="e-panel"
        data-row="1"
        data-col="3"
        data-sizeX="1"
        data-sizeY="1"
      >
        <span id="close" class="e-template-icon e-clear-icon" />
        <div class="e-panel-container">
          <div class="text-align">6</div>
        </div>
      </div>
      <div
        id="eight"
        class="e-panel"
        data-row="0"
        data-col="4"
        data-sizeX="1"
        data-sizeY="3"
      >
        <span id="close" class="e-template-icon e-clear-icon" />
        <div class="e-panel-container">
          <div class="text-align">7</div>
        </div>
      </div>
    </SfDashboardLayout>
    <h1>DatePicker</h1>
    <SfDatePicker />
    <h1>DateRangePicker</h1>
    <SfDateRangePicker
      {...{
        min: new Date("1/15/2017"),
        max: new Date("12/20/2017")
      }}
    />
    <h1>DateTimePicker</h1>
    <SfDateTimePicker />
    <h1>TimePicker</h1>
    <SfTimePicker /> */}
    <h1>dd</h1>
    <SidebarDemo />
  </div>
);

const appMain = document.getElementById("app");
appMain.appendChild(view1);
