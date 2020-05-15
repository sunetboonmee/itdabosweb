// Created by iWeb 3.0.4 local-build-20130801

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(-0.0000,1.0000),color:'#000000',opacity:0.500000}),stroke_0:new IWPhotoFrame([IWCreateImage('Welcome_files/Watercolor_iweb_01.png'),IWCreateImage('Welcome_files/Watercolor_iweb_02.png'),IWCreateImage('Welcome_files/Watercolor_iweb_04.png'),IWCreateImage('Welcome_files/Watercolor_iweb_08.png'),IWCreateImage('Welcome_files/Watercolor_iweb_16.png'),IWCreateImage('Welcome_files/Watercolor_iweb_14.png'),IWCreateImage('Welcome_files/Watercolor_iweb_13.png'),IWCreateImage('Welcome_files/Watercolor_iweb_05.png')],null,0,0.800000,0.000000,0.000000,0.000000,0.000000,12.000000,12.000000,11.000000,11.000000,13.000000,12.000000,13.000000,12.000000,null,null,null,0.500000),shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(0.0000,-0.0000),color:'#000000',opacity:0.230000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
