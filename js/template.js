
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
      modelContent: [
         {row:[
            {panel:[
               {format: "large-8"},
               {h3: "Hey, I'm Dan, this is my stuff!"},
               {p: "This is the main area via Backbone."},
            ]},
            {panel: [
               {format: "large-4"},
               {h4: "Secondary area"},
               {p: "This is the secondary area via Backbone"},
            ]},
         ]},
   ]},  //mainData

   artData: {
      modelContent: [
         {row:[
            {panel:[
               {format: "large-4 push-8"},
               {p: "Over the last few years, I have worked on a number of different artwork installation pieces in collaboration with Seattle artist Susie J. Lee."},
               {p: "In most cases, I was responsible for the electronics and lighting components of the artwork.  However, in some cases, I also did the complete physical design and construction of the piece."}
            ]},
            {panel:[
               {format: "large-8 pull-4"},
               {h3: "Installation art pieces"},
               {ul: [
                  {style: "large-block-grid-2 small-block-grid-1"},
                  {li: [{a: {href: "#art-rain", link: {img: "img/rainshow med thumb.png"}}}]},
                  {li: [{a: {href: "#art-contact", link: {img: "img/contact med thumbnail.png"}}}]},
                  {li: [{a: {href: "#art-inspire", link: {img: "img/dynamicspace med thumbnail.png"}}}]},
                  {li: [{a: {href: "#art-finn", link: {img: "img/finnhill med thumbnail.png"}}}]},
               ]},
            ]},
         ]}
   ]}, //artData

   rainData: {
      modelContent: [
         {row:[
            {panel:[
               {format: "large-4 push-8"},
               {p: "Rain Shower was a major installation piece in the Frye Art Museum as part of the 60th anniversary gala."},
               {p: "Rain Shower uses light to evoke rain and sound to explore the nature of human memory."},
            ]},
            {panel:[
               {format: "large-8 pull-4"},
               {h3: "Rain Shower 2012"},
               {caro: [
                  {img: "img/rainshower3.jpg",
                  caption: "Photo credit: Erik Skaar"},
                  {img: "img/rainshower1.jpg",
                  caption: "Photo credit: Erik Skaar"},
                  {img: "img/rainshower2.jpg",
                  caption: "Photo credit: Erik Skaar"},
               ]},
               {p: "Frye Art Museum, Susie Lee"},
               {br: " "},
               {p: "Another collaboration with Susie Lee, this piece is loosely based of an earlier, smaller work of hers."},
               {br: " "},
               {p: "Rain Shower evokes the feeling of rain by simulating raindrops by projecting modulated white light pulses onto a darkened floor.  Found sounds are projected from a distributed speakder network to further evoke the sensation of rainfall.  The rainfall ebbs and flows with recorded music and interviews to engage the viewer in an examination of our relationship with our memory of the past."},
               {br: " "},
               {p: "This piece was over 1500 sq ft of ceiling mounted steel framework with 512 high intensity LEDs.  The system was controlled by a Processing node on a PC communicating with a network of 32 custom designed Arduino clones on an RS485 differential network.  The LEDs were each individually controlled by TLC5940 ICs at each node.  32 individual speakers play directional sound in coodination with wall-mount speakers playing music and interview sound clips.  The system has full digital control over light timing, intensity, and sound."},
               {br: " "},
               {p: "For this piece, I was responsible for electronics design, fabrication, metalworking, assembly and programming."},
            ]},
         ]},
   ]}, //rainData

   contactData: {
      modelContent: [
         {row:[
            {panel:[
               {format: "large-4 push-8"},
               {p: "Contact is an interactive digital art piece that combines digital communicativity with an analog electronics asthetic."},
               {p: "It explores the nature of contact and human communication in a world of continuous and overwhelming connectivity."}
            ]},
            {panel:[
               {format: "large-8 pull-4"},
               {h3: "Contact 2012"},
               {caro:[
                  {img: "img/contact part3_lbox.jpg"},
                  {embed: "<iframe src=\"http://player.vimeo.com/video/25887447?byline=0&amp;portrait=0&amp;color=888888\" width=\"700\" height=\"420\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"},
                  {img: "img/contact part4_lbox.jpg"},
                  {img: "img/contact part5_lbox.jpg"},
                  {img: "img/contact part6_lbox.jpg"},
               ]},
               {p: "Susie Lee"},
               {br: " "},
               {p: "This Susie Lee piece was a joint project with Ben Franks who did some of the initial electronics and programming work before I came on board."},
               {br: " "},
               {p: "Contact examines the relationship between technology, communication and ourselves in an era of sensory overstimulation.  Constructed from vintage scientific equipment and historic engineering materials, it evokes the aesthetic of vacuum-tube era computing.  However, it is an advanced digital piece capable of email, phone and SMS connectivity."},
               {p: "When contacted, the piece plays out the body of the missive in Morse code using a relay and electrically heats a piece of graphite to incandescence to signify the condensation of the entire communication to a single binary bit.  It then proceeds to randomly communicate back to the viewer over time, becoming increasingly irate if the viewer does not promptly communicate back to it."},
               {br: " "},
               {p: "Contact is an antique scientific instrumentation case with a CNC milled copper facing.  A Nokia cellphone is used to receive phone calls, texts and emails.  A bluetooth link is established to a Mac Mini which is interfaced to an Arduino with a custom manufactured MOSFET array which handles the large amperage loads for the carbon leads.  The individual elements are mechanical pencil leads held in modified hair clips and encased in borosillicate tubing.  Each element heats up to approximately 3000 F when activated."},
               {br: " "},
               {p: "For this piece, I was responsible for all physical fabrication, all custom electronics and wiring and all programming downstream of the bluetooth interface."},
            ]},
         ]},
   ]}, //contactData

   inspireData: {
      modelContent: [
         {row:[
            {panel:[
               {format: "large-4 push-8"},
               {p: "Inspiratories is a glass art piece showcased at the Dynamikspace design studio.  Invoking natural color schemes, the blades of glass cycle through color cycles meant to evoke the passage of seasons."},
            ]},
            {panel:[
               {format: "large-8 pull-4"},
               {h3: "Inspiratories 2012"},
               {caro: [
                  {img: "img/dynamicspace2.jpg",
                  caption: "Photo credit: Rodrigo Valenzuela"},
               ]},
               {br: " "},
               {p: "This is a collaborative piece with Susie Lee and Scott \"Chico\" Rasky."},
               {br: " "},
               {p: "Each blade is individually lit and digitally controlled by a series of microcontroller nodes which communicate via networked serial to create rich, fading palates of color."},
               {p: "For this piece, I was responsible for all electronics, lighting and programming."},
            ]},
         ]},
   ]}, //dynamikData

   finnData: {
      modelContent: [
         {row:[
            {panel:[
               {format: "large-4 push-8"},
               {p: "Finn Hill Family is a large, interactive piece installed at Finn Hill Junior High School.  It interacts with the LEED building automation electronics to communicate the amount of building resource usage to students."},
            ]},
            {panel:[
               {format: "large-8 pull-4"},
               {h3: "Finn Hill Junior High"},
               {caro: [
                  {img: "img/finnhill sculpture1 sm.jpg"},
                  {img: "img/finnhill sculpture4 sm.jpg"},
               ]},
               {br: " "},
               {p: "A collaboration with Susie Lee and Scott \"Chico\" Rasky, this installation is an environental awareness piece.  It changes lighting intensity and color over time to represent the level of resource usage such as water, electricity and heating being used in the school.  Pulling data from the building automation controllers, it can query this data in real time."},
               {br: " "},
               {p: "Each piece is cast recycled glass illuminated by a high intensity RGB LED array.  The array is powered and controlled by a custom PCB controller board and receiving information via ethernet from the building automation computers."},
               {br: " "},
               {p: "For this piece, I was responsible for all lighting and electronics as well as portions of the glass fabrication and installation."},
            ]},
         ]},
   ]}, //finnData

   electronicsData: {
      modelContent: [
         {row:[
            {panel:[
               {format: "large-4 push-8"},
            ]},
            {panel:[
               {format: "large-8 pull-4"},
               {h3: "My electronics work"},
            ]},
         ]},
   ]}, //electronicsData

   cvData: {
      modelContent: [
         {row: [
            {panel:[
               {format: "large-12"},
               {h2: "Dan Heidel"},                        
            ]},
         ]},
         {row:[
            {panel:[
               {format: "large-8"},
               {h4: "Summary"},
               {p: "I have a wide ranging set of job experience that include C/C++/C# .Net application development, embedded electronics programming in C, electronics design, PCB design, project management and a wide variety of scientific disciplines."},
            ]},
            {panel:[
               {format: "large-4"},
               {h4: "Programming Skills"},
               {hr: " "},
               {ul: [
                  {style: "no-bullet"},
                  {h5: "Javascript"},
                  {ul:[
                     {p: "jQuery"},
                     {p: "Backbone"},
                     {p: "Handlebars"},
                     {p: "HTML5"},
                     {p: "Canvas"},
                  ]}, 
                  {h5: "C#"},
                  {h5: "C/C++"},
                  {h5: "SQL"},
                  {h5: "Assembly"},
                  {ul: [
                     {style: "no-bullet"},
                     {p: "Atmel atMega"},
                     {p: "Microchip dsPic33"},
                     {p: "ARM Cortex M"},
                  ]}, 
               ]}, //ul
               {h4: "Related Skills"},
               {hr: " "},
               {ul: [
                  {h5: "Project Management"},
                  {h5: "PCB design"},
                  {h5: "System design and integration"},
                  {h5: "Fabrication and Metalworking"},
                  {h5: "Supply chain design and management"},
               ]}, //ul
            ]},
         ]}, //row
         {row:[
            {panel:[
               {format: "large-8"},
               {h4: "Experience"},
               {h5: "Independent contractor"},
               {blockq: "2009-2013"},
               {p: "I have been doing independent computer programming and electrical engineering design for the past 3 years.  My electrical engineering work has been primarily geared towards art installation pieces in collaboration with local artists.  I have been responsible for the physical and electrical design of several local art pieces including a flagship piece featured at the Frye Art Museum 60th anniversary celebration.  I have also been working on developing my own line of wirelessly networked LED stage lighting and garden automation systems."},

            ]},
            {panel:[
               {format: "large-4"},
               {h4: "Education"},
               {hr: " "},
               {ul: [
                  {style: "no-bullet"},
                  {h5: "BS Molecular and Cellular Biology"},
                  {p: "University of Washington - 1998"},
                  {br: " "},
                  {h5: "PhD Materials Science and Engineering"},
                  {p: "University of Washington - incomplete"},
                  {br: " "},
                  {h5: "MS Electrical Engineering"},
                  {p: "University of Washington - ongoing"},
               ]},
            ]},
         ]}, //row
   ]}, //cvData

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