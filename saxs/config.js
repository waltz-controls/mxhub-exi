var ExtISPyB ={
   version : 'alpha-u3',
   release_date : '2017/03/01',

   spaceGroups : ["P1", "P2", "P21", "C2", "P222", "P2221", "P21212", "P212121", "C2221", "C222", "F222", "I222", "I212121", "P4", "P41", "P42", "P43", "I4", "I41", "P422", "P4212", "P4122", "P41212", "P4222", "P42212", "P4322", "P43212", "I422", "I4122", "P3", "P31", "P32", "H3", "R3", "P312", "P321", "P3112", "P3121", "P3212", "P3221", "H32", "R32", "P6", "P61", "P65", "P62", "P64", "P63", "P622", "P6122", "P6522", "P6222", "P6422", "P6322", "P23", "F23", "I23", "P213", "I213", "P432", "P4232", "F432", "F4132", "I432", "P4332", "P4132", "I4132"],   
   spaceGroupLongNames : ["P1", "P121", "P1211", "C121", "P222", "P2221", "P21212", "P212121", "C2221", "C222", "F222", "I222", "I212121", "P4", "P41", "P42", "P43", "I4", "I41", "P422", "P4212", "P4122", "P41212", "P4222", "P42212", "P4322", "P43212", "I422", "I4122", "P3", "P31", "P32", "H3", "R3", "P312", "P321", "P3112", "P3121", "P3212", "P3221", "H32", "R32", "P6", "P61", "P65", "P62", "P64", "P63", "P622", "P6122", "P6522", "P6222", "P6422", "P6322", "P23", "F23", "I23", "P213", "I213", "P432", "P4232", "F432", "F4132", "I432", "P4332", "P4132", "I4132"],

   sites:[
        {
         name:'ESRF',
         siteName:'ESRF',
         description : 'European Synchroton Radiation Facility',
         icon : '../images/site/esrf.png',
         url:'https://ispyb.esrf.fr/ispyb/ispyb-ws/rest',
         exiUrl:'https://ispyb.esrf.fr/ispyb/ispyb-ws/rest',
         beamlines:{
            SAXS:[
              { 
                   name : "BM29"                   
               }

            ],
             EM :[
                   { 
                      name : "CM01"
                   }
            ],
            MX:[
               { 
                   name : "ID23-1",
                   sampleChangerType : 'FlexHCDDual'
               },
               { 
                   name : "ID23-2",
                   sampleChangerType : 'FlexHCDUnipuckPlate'
               },
               { 
                   name : "ID29",
                   sampleChangerType : 'FlexHCDDual'
               },
               { 
                   name : "ID30A-1",
                   sampleChangerType : 'RoboDiffHCDSC3'
               },
               { 
                   name : "ID30A-2",
                   sampleChangerType : 'SC3'
               },
               { 
                   name : "ID30A-3",
                   sampleChangerType : 'FlexHCDDual'
               },
               { 
                   name : "ID30B",
                   sampleChangerType : 'FlexHCD'
               },
               { 
                   name : "BM14U",
                   sampleChangerType : 'FlexHCD'
               },
               { 
                   name : "BM30A",
                   sampleChangerType : 'FlexHCDDual'
               }                                             
            ]
         }

      },

      {
         name:'ESRF TEST',
         siteName:'ESRF TEST',
         url:'https://ispyb-valid.esrf.fr/ispyb/ispyb-ws/rest',
         icon : '../images/site/dev.esrf.png',
         exiUrl:'https://ispyb-valid.esrf.fr/ispyb/ispyb-ws/rest',
         beamlines:{
            SAXS:[
               {
		          name : 'BM29',
		          sampleChangerType : ''
   	           }
             
            ],
            EM :[
                   { 
                      name : "CM01"
                   }
            ],
            MX:[
                { 
                   name : "ID23-1",
                   sampleChangerType : 'FlexHCDDual'
               },
               { 
                   name : "ID23-2",
                   sampleChangerType : 'FlexHCDUnipuckPlate'
               },
               { 
                   name : "ID29",
                   sampleChangerType : 'FlexHCDDual'
               },
               { 
                   name : "ID30A-1",
                   sampleChangerType : 'RoboDiffHCDSC3'
               },
               { 
                   name : "ID30A-2",
                   sampleChangerType : 'SC3'
               },
               { 
                   name : "ID30A-3",
                   sampleChangerType : 'FlexHCDDual'
               },
               { 
                   name : "ID30B",
                   sampleChangerType : 'FlexHCD'
               },
               { 
                   name : "BM14U",
                   sampleChangerType : 'FlexHCD'
               },
               { 
                   name : "BM30A",
                   sampleChangerType : 'FlexHCDDual'
               }                                           
            ]
         }
      },    

      {
         name:'ESRF lindemaria',
         siteName:'ESRF lindemaria',
         url:'http://lindemaria:8080/ispyb/ispyb-ws/rest',
         icon : '../images/site/dev.esrf.png',
		 exiUrl:'http://lindemaria:8080/ispyb/ispyb-ws/rest',
         beamlines:{
            SAXS:[
               {
		          name : 'BM29',
		          sampleChangerType : ''
   	           }
             
            ],
            EM :[
                   { 
                      name : "CM01"
                   }
            ],
            MX:[                
               { 
                   name : "ID23-1",
                   sampleChangerType : 'FlexHCD'
               },
               
               { 
                   name : "ID23-2",
                   sampleChangerType : 'SC3'
               },
               { 
                   name : "ID29",
                   sampleChangerType : 'FlexHCD'
               },
               { 
                   name : "ID30A-1",
                   sampleChangerType : 'RoboDiff'
               },
               { 
                   name : "ID30A-2",
                   sampleChangerType : 'SC3'
               },
               { 
                   name : "ID30A-3",
                   sampleChangerType : 'SC3'
               },
               { 
                   name : "ID30B",
                   sampleChangerType : 'FlexHCD'
               },
               { 
                   name : "BM14U",
                   sampleChangerType : 'FlexHCD'
               },
               { 
                   name : "BM30A",
                   sampleChangerType : 'FlexHCD'
               }                                             
            ]
         }
      },
	       {
         name:'ESRF localhost',
         siteName:'ESRF localhost',
         url:'http://localhost:8080/ispyb/ispyb-ws/rest',
         icon : '../images/site/dev.esrf.png',
		 exiUrl:'http://localhost:8080/ispyb/ispyb-ws/rest',
         beamlines:{
            SAXS:[

             
            ],
            MX:[
               { 
                   name : "ID23-1",
                   sampleChangerType : 'FlexHCD'
               },
               { 
                   name : "ID23-2",
                   sampleChangerType : 'SC3'
               },
               { 
                   name : "ID29",
                   sampleChangerType : 'FlexHCD'
               },
               { 
                   name : "ID30A-1",
                   sampleChangerType : 'RoboDiff'
               },
               { 
                   name : "ID30A-2",
                   sampleChangerType : 'SC3'
               },
               { 
                   name : "ID30A-3",
                   sampleChangerType : 'SC3'
               },
               { 
                   name : "ID30B",
                   sampleChangerType : 'FlexHCD'
               },
               { 
                   name : "BM14U",
                   sampleChangerType : 'FlexHCD'
               },
               { 
                   name : "BM30A",
                   sampleChangerType : 'FlexHCD'
               }                                             
            ]
         }
      }
   ]
};



