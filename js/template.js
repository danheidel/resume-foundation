
            // var Data = {
            //    modelContent: [
            //       {row:[
            //          {panel:[
            //             {format: "large-8"},
            //             {p: "This is the main area via Backbone."}
            //          ]},
            //          {panel:[
            //             {format: "large-4"},
            //             {p: "This is the secondary area via Backbone."}
            //          ]}
            //       ]}
            // ]};
            // pageVars.gridContent.set();

window.templateData = {   
   mainData: {
      mainContent:[
         {is:"div",
         class:"row",
         children:[
            {panel: " ",
            colClass: "large-8",                  
            children:[
               {is:"h3",content: "Hey, I'm Dan, this is my stuff!",},
               {is: "p",content: "This is the main area via Backbone.",},
            ]},
            {panel: " ",
            colClass:"large-4",
            children:[
               {is:"h4",content:"Secondary area"},
               {is:"p",content:"This is the secondary area via Backbone"},
            ]},
         ]},
      ]
   },  //mainData

   artData: {
      mainContent: [
         {is:"div",
         class:"row",
         children:[
            {panel:" ",
            colClass:"large-4 push-8",
            children:[
               {is:"p", content:"Over the last few years, I have worked on a number of different artwork installation pieces in collaboration with Seattle artist Susie J. Lee."},
               {is:"p", content:"In most cases, I was responsible for the electronics and lighting components of the artwork.  However, in some cases, I also did the complete physical design and construction of the piece."}
            ]},
            {panel:" ",
            colClass: "large-8 pull-4",
            children:[
               {is:"h3", content:"Installation art pieces"},
               {is:'ul',
               class:"large-block-grid-2 small-block-grid-1",
               children:[
                  {is:"li",
                  children:[
                     {is:"a", href: "#art-rain", 
                        children:[{is:"img", src:"img/rainshow med thumb.png"}],
                     }
                  ]},
                  {is:"li",
                  children:[
                     {is:"a", href: "#art-contact", 
                        children:[{is:"img", src:"img/contact med thumbnail.png"}],
                     }
                  ]},
                  {is:"li",
                  children:[
                     {is:"a", href: "#art-inspire", 
                        children:[{is:"img", src:"img/dynamicspace med thumbnail.png"}],
                     }
                  ]},
                  {is:"li",
                  children:[
                     {is:"a", href: "#art-finn", 
                        children:[{is:"img", src:"img/finnhill med thumbnail.png"}],
                     }
                  ]}
               ]}
            ]}
         ]}
      ]
   }, //artData

   rainData: {
      mainContent: [
         {is:"div",
         class:"row",
         children:[
            {panel:" ",
            colClass:"large-4 push-8",
            children:[
               {is:"p", content:"Rain Shower was a major installation piece in the Frye Art Museum as part of the 60th anniversary gala."},
               {is:"p", caption:"Rain Shower uses light to evoke rain and sound to explore the nature of human memory."},
            ]},
            {panel:" ",
            colClass:"large-8 pull-4",
            children:[
               {is:"h3", content:"Rain Shower 2012"},
               {is:"ul",
               attr:" data-orbit",
               children:[
                  {is:"li",children:[
                     {is:"img", src:"img/rainshower3.jpg"},
                     {is:"div", class:"orbit-caption", content: "Photo credit: Erik Skaar"},
                  ]},
                  {is:"li",children:[
                     {is:"img", src:"img/rainshower1.jpg"},
                     {is:"div", class:"orbit-caption", content: "Photo credit: Erik Skaar"},
                  ]},
                  {is:"li",children:[
                     {is:"img", src:"img/rainshower2.jpg"},
                     {is:"div", class:"orbit-caption", content: "Photo credit: Erik Skaar"},
                  ]},
               ]},
               {is:"p", content:"Frye Art Museum, Susie Lee"},
               {is:"br"},
               {is:"p", content:"Another collaboration with Susie Lee, this piece is loosely based of an earlier, smaller work of hers."},
               {is:"br"},
               {is:"p", content:"Rain Shower evokes the feeling of rain by simulating raindrops by projecting modulated white light pulses onto a darkened floor.  Found sounds are projected from a distributed speakder network to further evoke the sensation of rainfall.  The rainfall ebbs and flows with recorded music and interviews to engage the viewer in an examination of our relationship with our memory of the past."},
               {is:"br"},
               {is:"p", content:"This piece was over 1500 sq ft of ceiling mounted steel framework with 512 high intensity LEDs.  The system was controlled by a Processing node on a PC communicating with a network of 32 custom designed Arduino clones on an RS485 differential network.  The LEDs were each individually controlled by TLC5940 ICs at each node.  32 individual speakers play directional sound in coodination with wall-mount speakers playing music and interview sound clips.  The system has full digital control over light timing, intensity, and sound."},
               {is:"br"},
               {is:"p", content:"For this piece, I was responsible for electronics design, fabrication, metalworking, assembly and programming."},
            ]},
         ]},
      ]
   }, //rainData

   contactData: {
      mainContent: [
         {is:"div",
         class:"row",
         children:[
            {panel:" ",
            colClass:"large-4 push-8",
            children:[
               {is:"p", content:"Contact is an interactive digital art piece that combines digital communicativity with an analog electronics asthetic."},
               {is:"p", caption:"It explores the nature of contact and human communication in a world of continuous and overwhelming connectivity."},
            ]},
            {panel:" ",
            colClass:"large-8 pull-4",
            children:[
               {is:"h3", content:"Contact 2012"},
               {is:"ul",
               attr:" data-orbit",
               children:[
                  {is:"li",children:[
                     {is:"img", src:"img/contact part3_lbox.jpg"},
                     {is:"div", class:"orbit-caption", content: "Photo credit: Erik Skaar"},
                  ]},
                  {is:"li",children:[
                     {is:"iframe",
                     src:"http:\/\/player.vimeo.com/video/25887447?byline=0&amp;portrait=0&amp;color=888888",
                     width:700,
                     height:420,
                     attr: " frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen>"},
                  ]},
                  {is:"li",children:[
                     {is:"img", src:"img/contact part4_lbox.jpg"},
                     {is:"div", class:"orbit-caption", content: "Photo credit: Erik Skaar"},
                  ]},
                  {is:"li",children:[
                     {is:"img", src:"img/contact part5_lbox.jpg"},
                     {is:"div", class:"orbit-caption", content: "Photo credit: Erik Skaar"},
                  ]},
                  {is:"li",children:[
                     {is:"img", src:"img/contact part6_lbox.jpg"},
                     {is:"div", class:"orbit-caption", content: "Photo credit: Erik Skaar"},
                  ]},
               ]},
               {is:"p", content:"Frye Art Museum, Susie Lee"},
               {is:"br"},
               {is:"p", content:"Contact examines the relationship between technology, communication and ourselves in an era of sensory overstimulation.  Constructed from vintage scientific equipment and historic engineering materials, it evokes the aesthetic of vacuum-tube era computing.  However, it is an advanced digital piece capable of email, phone and SMS connectivity."},
               {is:"br"},
               {is:"p", content:"When contacted, the piece plays out the body of the missive in Morse code using a relay and electrically heats a piece of graphite to incandescence to signify the condensation of the entire communication to a single binary bit.  It then proceeds to randomly communicate back to the viewer over time, becoming increasingly irate if the viewer does not promptly communicate back to it."},
               {is:"br"},
               {is:"p", content:"Contact is an antique scientific instrumentation case with a CNC milled copper facing.  A Nokia cellphone is used to receive phone calls, texts and emails.  A bluetooth link is established to a Mac Mini which is interfaced to an Arduino with a custom manufactured MOSFET array which handles the large amperage loads for the carbon leads.  The individual elements are mechanical pencil leads held in modified hair clips and encased in borosillicate tubing.  Each element heats up to approximately 3000 F when activated."},
               {is:"br"},
               {is:"p", content:"For this piece, I was responsible for all physical fabrication, all custom electronics and wiring and all programming downstream of the bluetooth interface."},
            ]},
         ]},
      ]
   }, //contactData

   inspireData: {
      mainContent: [
         {is:"div",
         class:"row",
         children:[
            {panel:" ",
            colClass:"large-4 push-8",
            children:[
               {is:"p", content:"Inspiratories is a glass art piece showcased at the Dynamikspace design studio.  Invoking natural color schemes, the blades of glass cycle through color cycles meant to evoke the passage of seasons."},
            ]},
            {panel:" ",
            colClass:"large-8 pull-4",
            children:[
               {is:"h3", content:"Inspiratories 2012"},
               {is:"ul",
               attr:" data-orbit",
               children:[
                  {is:"li",children:[
                     {is:"img", src:"img/dynamicspace2.jpg"},
                     {is:"div", class:"orbit-caption", content: "Photo credit: Rodrigo Valenzuela"},
                  ]},
               ]},
               {is:"br"},
               {is:"p", content:"This is a collaborative piece with Susie Lee and Scott \"Chico\" Rasky."},
               {is:"br"},
               {is:"p", content:"Each blade is individually lit and digitally controlled by a series of microcontroller nodes which communicate via networked serial to create rich, fading palates of color."},
               {is:"p", content:"For this piece, I was responsible for all electronics, lighting and programming."},
            ]},
         ]},
      ]
   }, //dynamikData

   finnData: {
      mainContent: [
         {is:"div",
         class:"row",
         children:[
            {panel:" ",
            colClass:"large-4 push-8",
            children:[
               {is:"p", content:"Finn Hill Family is a large, interactive piece installed at Finn Hill Junior High School.  It interacts with the LEED building automation electronics to communicate the amount of building resource usage to students."},
            ]},
            {panel:" ",
            colClass:"large-8 pull-4",
            children:[
               {is:"h3", content:"Finn Hill Junior High 2011"},
               {is:"ul",
               attr:" data-orbit",
               children:[
                  {is:"li",children:[
                     {is:"img", src:"img/finnhill sculpture1 sm.jpg"},
                  ]},
                  {is:"li",children:[
                     {is:"img", src:"img/finnhill sculpture4 sm.jpg"},
                  ]},
               ]},
               {is:"br"},
               {is:"p", content:"A collaboration with Susie Lee and Scott \"Chico\" Rasky, this installation is an environental awareness piece.  It changes lighting intensity and color over time to represent the level of resource usage such as water, electricity and heating being used in the school.  Pulling data from the building automation controllers, it can query this data in real time."},
               {is:"br"},
               {is:"p", content:"Each piece is cast recycled glass illuminated by a high intensity RGB LED array.  The array is powered and controlled by a custom PCB controller board and receiving information via ethernet from the building automation computers."},
               {is:"br"},
               {is:"p", content:"For this piece, I was responsible for all lighting and electronics as well as portions of the glass fabrication and installation."},
            ]},
         ]},
      ]
   }, //finnData

   electronicsData: {
      mainContent: [
         {is:"div",
         class:"row",
         children:[
            {panel:" ",
            colClass:"large-4 push-8",
            children:[
            ]},
            {panel:" ",
            colClass:"large-8 pull-4",
            children:[
               {is:"h3", content:"My electronics work"},
            ]},
         ]},
      ]
   }, //electronicsData

   cvData: {
      mainContent: [
         {is:"div",
         class:"row",
         children:[
            {panel:" ",
            colClass:"large-12",
            children:[{is:"h2", content:"Dan Heidel"}
            ]},
         ]},
         {is:"div",
         class:"row",
         children:[
            {panel:" ",
            colClass:"large-8",
            children:[
               {is:"h4", content:"Summary"},
               {is:"p", content:"I have a wide ranging set of job experience that include C/C++/C# .Net application development, embedded electronics programming in C, electronics design, PCB design, project management and a wide variety of scientific disciplines."}
            ]},
            {panel:" ",
            colClass: "large-4",
            children:[
               {is:"h4", content:"Programming Skills"},
               {is:"hr"},
               {is:"ul",
               class:"no-bullet",
               children:[
                  {is:"h5", content:"Javascript"},
                  {is:"ul",
                  children:[
                     {is:"p", content:"jQuery"},
                     {is:"p", content:"Backbone"},
                     {is:"p", content:"Handlebars"},
                     {is:"p", content:"HTML5"},
                     {is:"p", content:"Canvas"},
                  ]}, 
                  {is:"h5", content:"C#"},
                  {is:"h5", content:"C/C++"},
                  {is:"h5", content:"SQL"},
                  {is:"h5", content:"Assembly"},
                  {is:"ul",
                  children:[
                     {is:"p", content:"Atmel atMega"},
                     {is:"p", content:"Microchip dsPic33"},
                     {is:"p", content:"ARM Cortex M"},
                  ]}, 
               ]}, //ul
               {is:"h4", content:"Related Skills"},
               {is:"hr"},
               {is:"ul",
               children:[
                  {is:"h5", content:"Project Management"},
                  {is:"h5", content:"PCB design"},
                  {is:"h5", content:"System design and integration"},
                  {is:"h5", content:"Fabrication and Metalworking"},
                  {is:"h5", content:"Supply chain design and management"},
               ]}, //ul
            ]}
         ]},
         {is:"div",
         class:"row",
         children:[
            {panel:" ",
            colClass:"large-8",
            children:[
               {is:"h4", content:"Experience"},
               {is:"h5", content:"Independent contractor"},
               {is:"blockq", content:"2009-2013"},
               {is:"p", content:"I have been doing independent computer programming and electrical engineering design for the past 3 years.  My electrical engineering work has been primarily geared towards art installation pieces in collaboration with local artists.  I have been responsible for the physical and electrical design of several local art pieces including a flagship piece featured at the Frye Art Museum 60th anniversary celebration.  I have also been working on developing my own line of wirelessly networked LED stage lighting and garden automation systems."},
            ]},
            {panel:" ",
            colClass: "large-4",
            children:[
               {is:"h4", content:"Education"},
               {is:"hr"},
               {is:"ul",
               class:"no-bullet",
               children:[
                  {is:"h5", content:"BS Molecular and Cellular Biology"},
                  {is:"p", content:"University of Washington - 1998"},
                  {is:"br"},
                  {is:"h5", content:"PhD Materials Science and Engineering"},
                  {is:"p", content:"University of Washington - incomplete"},
                  {is:"br"},
                  {is:"h5", content:"MS Electrical Engineering"},
                  {is:"p", content:"University of Washington - ongoing"},
               ]},
            ]}
         ]},
      ],
   }, //cvData
};


/*
   testData: {
      modelContent: [
         {row:[
            {panel:[
               {format: "large-8"},
               {h3: "Hey, I'm Dan, this is my stuff!"},
               {p: "This is the main area via Backbone."},
               {blockq: "This is a blockquote"},
               {a: {
                  href: "http://google.com",
                  link: {p: "GOOOOOGLE"}
               }},
               {a: {
                  href: "http://google.com",
                  pop: " ",
                  link: {img: "img/contact thumbnail.png"}
               }},
               {ul:[
                  {style: "disc"},
                  {li: [
                     {p: "item 1"}
                  ]},
                  {li: [
                     {p: "item 2a"},
                  ]},
                  {li: [
                     {p: "item 3"},
                     {ul:[
                        {style: "square"},
                        {li: [
                           {p: "item 3 sub a"}
                        ]},
                        {li: [
                           {p: "item 3 sub b 1"},
                        ]}
                     ]}
                  ]}
               ]},
               {row: [
                  {panel:[
                     {format: "large-8"},
                     {style: "clear"},
                     {h3: "nested large:8"},
                     {h1: "H1!"},
                     {h2: "H2!"},
                     {h3: "H3!"},
                     {h4: "H4!"},
                     {h5: "H5!"},
                     {hr: " "},
                  ]},
                  {panel: [
                     {format: "large-4"},
                     {h3: "nested large-4"}
                  ]}
               ]}
            ]},
            {panel:[
               {format: "large-4"},
               {style: "clear no-edge"},
               {row: [
                  {panel: [
                     {format: "large-12"},
                     {h4: "Who the hell is Dan?"},
                     {p: "This is the secondary area via Backbone."},
                     {p: "This is the second paragraph"},
                     {p: "This is the third paragraph"}
                  ]}
               ]},
               {row: [
                  {panel: [
                     {format: "large-12"},
                     {p: "more stuff!"}
                  ]}
               ]}
            ]}
         ]},
         {row:[
            {panel:[
               {format: "large-5"},
               {h3: "first panel, row 2"}
            ]},
            {panel:[
               {format: "large-7"},
               {h1: "second panel, row2"}
            ]}
         ]},
   ]}, //electronicsData
};




   <script id="main-template" type="text/x-handlebars-template">
      {{#each model-content}}
         {{> row-parse}}
      {{/each}}
   </script>

   <script id="inner-parse" type="x-handlebars-template">
      {{#if p}}<p>{{p}}</p>{{/if}}
      {{#if t}}{{t}}{{/if}}
      {{#if h1}}<h1>{{h1}}</h1>{{/if}}
      {{#if h2}}<h2>{{h2}}</h2>{{/if}}
      {{#if h3}}<h3>{{h3}}</h3>{{/if}}
      {{#if h4}}<h4>{{h4}}</h4>{{/if}}
      {{#if h5}}<h5>{{h5}}</h5>{{/if}}
      {{#if blockq}}<blockquote>{{blockq}}</blockquote>{{/if}}
      {{#if br}}<br />{{/if}}
      {{#if img}}<img src="{{img}}" />{{/if}}
      {{#if a}}<a href="{{a.href}}"{{#if a.pop}} target='_blank' {{/if}}>{{#with a.link}}{{> inner-parse}}{{/with}}</a>{{/if}}
      {{#if ul}}
         <ul class="{{{ul.[0].style}}}">
         {{#each ul}}
            {{> inner-parse}}
         {{/each}}
         </ul>
      {{/if}}
      {{#if ol}}
         <ol class="{{{ol.[0].style}}}>">
         {{#each ol}}
            {{> inner-parse}}
         {{/each}}
         </ol>
      {{/if}}
      {{#if dl}}
         <dl class="{{{dl.[0].style}}}>">
         {{#each dl}}
            {{> inner-parse}}
         {{/each}}
         </dl>
      {{/if}}
      {{#if li}}
         <li>
         {{#each li}}
            {{> inner-parse}}
         {{/each}}
         </li>
      {{/if}}
      {{#if hr}}<hr></hr>{{/if}}
      {{#if embed}}{{{embed}}}{{/if}}
      {{#if row}}{{> row-parse}}{{/if}}
      {{#if caro}}
         <ul data-orbit>
         {{#each caro}}
            <li>
               {{> inner-parse}}
               {{#if caption}}<div class="orbit-caption">{{caption}}</div>{{/if}}
            </li>
         {{/each}}
         </ul>
      {{/if}}
   </script>

   <script id="panel-parse" type="x-handlebars-template">
      {{! gets a panel}}
      <div class="{{{panel.[0].format}}} columns">
         <div class="panel {{{panel.[1].style}}}">
            {{#each panel}}
               {{> inner-parse}}
            {{/each}}
         </div>
      </div>
   </script>

   <script id="row-parse" type="x-handlebars-template">
      {{! gets a row}}
      <div class="row">
         {{#each row}}
            {{> panel-parse}}
         {{/each}}
      </div>
   </script>
*/