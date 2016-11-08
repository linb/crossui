// The default code is a com class (inherited from xui.Com)
Class('RAD.CustomGradients', 'xui.Com',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append((new xui.UI.Dialog())
            .setHost(host,"mainPane")
            .setLeft(70)
            .setTop(30)
            .setWidth(438)
            .setHeight(298)
            .setShadow(false)
            .setResizer(false)
            .setCaption("$(RAD.custom_dlg.gradlg.Custom Gradients)")
            .setMinBtn(false)
            .setMaxBtn(false)
            .beforeClose("_ctl_panel4_beforeclose")
            );
            
            host.mainPane.append((new xui.UI.Block())
            .setHost(host,"bg")
            .setDock("fill")
            .setBorderType("inset")
            .setOverflow("hidden")
            );
            
            host.bg.append((new xui.UI.Group())
            .setHost(host,"ctl_group11")
            .setLeft(3)
            .setTop(2)
            .setWidth(414)
            .setHeight(70)
            .setOverflow("hidden")
            .setCaption("$(RAD.custom_dlg.Color Patterns)")
            .setToggleBtn(false)
            .setCustomStyle({"PANEL":"padding:2px;"})
            );
            
                        
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"clr1")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",  "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#4ba3cc"}, {"pos":"50%","clr":"#3289B2"},{"pos":"100%", "clr":"#3899C6"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"clr2")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#A5B8DA"}, {"pos":"50%", "clr":"#7089B3"},{"pos":"100%","clr":"#819bcb"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"clr3")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#ffd65e"}, {"pos":"50%", "clr":"#febf04"},{"pos":"100%","clr":"#ffc926"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"clr4")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#606c88"}, {"pos":"50%", "clr":"#3f4c6b"},{"pos":"100%","clr":"#4b546a"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"clr5")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#d5cea6"}, {"pos":"50%", "clr":"#b7ad70"},{"pos":"100%","clr":"#c5bb83"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"clr6")
           .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",  "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#a90329"}, {"pos":"50%", "clr":"#6d0019"},{"pos":"100%","clr":"#77021d"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"clr7")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",  "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#4ba614"}, {"pos":"50%", "clr":"#008c00"},{"pos":"100%","clr":"#36780f"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"clr8")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#ff5db1"}, {"pos":"50%", "clr":"#ef007c"},{"pos":"100%","clr":"#ff2a98"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span500")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#7d7e7d"}, {"pos":"50%", "clr":"#0e0e0e"},{"pos":"100%","clr":"#819bcb"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span501")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#cef8ff"}, {"pos":"50%", "clr":"#7fe0f8"},{"pos":"100%","clr":"#9bf1ff"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span502")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#f2f9fe"}, {"pos":"50%", "clr":"#d6f0fd"},{"pos":"100%","clr":"#c3e3fa"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span503")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#fb83fa"}, {"pos":"50%", "clr":"#e93cec"},{"pos":"100%","clr":"#f952f8"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span504")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#3093c7"}, {"pos":"50%", "clr":"#1c5a85"},{"pos":"100%","clr":"#26759e"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span505")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#a9db80"}, {"pos":"50%", "clr":"#96c56f"},{"pos":"100%","clr":"#8ed058"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span506")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#A5B8DA"}, {"pos":"50%", "clr":"#7089B3"},{"pos":"100%","clr":"#819bcb"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span507")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#b29af8"}, {"pos":"50%", "clr":"#9174ed"},{"pos":"100%","clr":"#8e6af5"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span508")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#f2f5f6"}, {"pos":"50%", "clr":"#c8d7dc"},{"pos":"100%","clr":"#d4dee1"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span509")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#ffc579"}, {"pos":"50%", "clr":"#fb9d23"},{"pos":"100%","clr":"#ffaf46"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span510")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#d3d3d3"}, {"pos":"50%", "clr":"#707070"},{"pos":"100%","clr":"#bababa"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span511")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#fcfac0"}, {"pos":"50%", "clr":"#f6f283"},{"pos":"100%","clr":"#faf68f"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span512")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#f4f5f5"}, {"pos":"50%", "clr":"#dfdddd"},{"pos":"100%","clr":"#d9dddd"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span513")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#f7e3e3"}, {"pos":"50%", "clr":"#ffd7d7"},{"pos":"100%","clr":"#ecbbbb"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span514")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#ff9a9a"}, {"pos":"50%", "clr":"#ff4040"},{"pos":"100%","clr":"#ff6767"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span515")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#a9a588"}, {"pos":"50%", "clr":"#8e865b"},{"pos":"100%","clr":"#938e6b"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span516")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#f62b2b"}, {"pos":"50%", "clr":"#d20202"},{"pos":"100%","clr":"#e40a0a"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span517")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",  "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#a67939"}, {"pos":"50%", "clr":"#845108"},{"pos":"100%","clr":"#805d2c"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span518")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#d2d2f9"}, {"pos":"50%", "clr":"#a6a6f2"},{"pos":"100%","clr":"#a5a5f3"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span519")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",  "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#49c0f0"}, {"pos":"50%", "clr":"#2cafe3"},{"pos":"100%","clr":"#1ab0ec"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span520")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",  "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#cedce7"}, {"pos":"50%", "clr":"#596a72"},{"pos":"100%","clr":"#acc4d6"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span521")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#b6e026"}, {"pos":"50%", "clr":"#abdc28"},{"pos":"100%","clr":"#95b91a"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span522")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",    "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#eab92d"}, {"pos":"50%", "clr":"#c79810"},{"pos":"100%","clr":"#cf9f15"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span523")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#45484d"}, {"pos":"50%", "clr":"#000"},{"pos":"100%","clr":"#819bcb"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span524")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#6bbed2"}, {"pos":"50%", "clr":"#76bdd1"},{"pos":"100%","clr":"#6bbed2"}], "type":"linear", "orient":"T"}}})
            );
            
            host.ctl_group11.append((new xui.UI.Span())
            .setHost(host,"ctl_span525")
            .setWidth(20)
            .setHeight(20)
            .setPosition("relative")
            .onClick("_clrpatternclicked")
            .setCustomStyle({"KEY":{"margin":"2px",   "border-radius":"2px", "$gradient":{"stops":[{"pos":"0%", "clr":"#6bbed2"}, {"pos":"50%", "clr":"#23538a"},{"pos":"100%","clr":"#82bbd1"}], "type":"linear", "orient":"T"}}})
            );
            
            host.bg.append((new xui.UI.Label())
            .setHost(host,"ctl_slabel26")
            .setLeft(28)
            .setTop(86)
            .setWidth(64)
            .setHeight(14)
            .setCaption("$RAD.custom_dlg.gradlg.Orientation")
            .setHAlign("left")
            );
            
            host.bg.append((new xui.UI.ComboInput())
            .setHost(host,"t_otype")
            .setDirtyMark(false)
            .setLeft(108)
            .setTop(82)
            .setWidth(313)
            .setType("listbox")
            .setItems([{"id":"linear-LT", "caption":"$(RAD.custom_dlg.gradlg.Linear $- from LeftTop)"}, {"id":"linear-T", "caption":"$(RAD.custom_dlg.gradlg.Linear $- from Top)"}, {"id":"linear-RT", "caption":"$(RAD.custom_dlg.gradlg.Linear $- from RightTop)"}, {"id":"linear-R", "caption":"$(RAD.custom_dlg.gradlg.Linear $- from Right)"}, {"id":"linear-RB", "caption":"$(RAD.custom_dlg.gradlg.Linear $- from RightBottom)"}, {"id":"linear-B", "caption":"$(RAD.custom_dlg.gradlg.Linear $- from Bottom)"}, {"id":"linear-LB", "caption":"$(RAD.custom_dlg.gradlg.Linear $- from LeftBottom)"}, {"id":"linear-L", "caption":"$(RAD.custom_dlg.gradlg.Linear $- from Left)"}, {"id":"radial-C", "caption":"$(RAD.custom_dlg.gradlg.Radial $- at Center)"}, {"id":"radial-LT", "caption":"$(RAD.custom_dlg.gradlg.Radial $- at LeftTop)"}, {"id":"radial-T", "caption":"$(RAD.custom_dlg.gradlg.Radial $- at Top)"}, {"id":"radial-RT", "caption":"$(RAD.custom_dlg.gradlg.Radial $- at RightTop)"}, {"id":"radial-R", "caption":"$(RAD.custom_dlg.gradlg.Radial $- at Right)"}, {"id":"radial-RB", "caption":"$(RAD.custom_dlg.gradlg.Radial $- at RightBottom)"}, {"id":"radial-B", "caption":"$(RAD.custom_dlg.gradlg.Radial $- at Bottom)"}, {"id":"radial-LB", "caption":"$(RAD.custom_dlg.gradlg.Radial $- at LeftBottom)"}, {"id":"radial-L", "caption":"$(RAD.custom_dlg.gradlg.Radial $- at Left)"}])
            .setValue("linear-T")
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.bg.append((new xui.UI.Block())
            .setHost(host,"ctl_block3")
            .setLeft(9)
            .setTop(112)
            .setWidth(414)
            .setHeight(20)
            .setBorderType("inset")
            .setOverflow("hidden")
            );
            
            host.ctl_block3.append((new xui.UI.Label())
            .setHost(host,"ctl_slabel5")
            .setLeft(354)
            .setTop(3)
            .setCaption("$RAD.custom_dlg.gradlg.Opacity")
            );
            
            host.ctl_block3.append((new xui.UI.Label())
            .setHost(host,"ctl_slabel4")
            .setLeft(290)
            .setTop(3)
            .setCaption("$RAD.custom_dlg.gradlg.Color")
            );
            
            host.ctl_block3.append((new xui.UI.Label())
            .setHost(host,"ctl_slabel3")
            .setLeft(158)
            .setTop(3)
            .setCaption("$RAD.custom_dlg.gradlg.Offset")
            );
            
            host.ctl_block3.append((new xui.UI.Label())
            .setHost(host,"ctl_slabel6")
            .setLeft(30)
            .setTop(2)
            .setCaption("$RAD.custom_dlg.gradlg.Stops")
            );
            
            host.bg.append((new xui.UI.Block())
            .setHost(host,"ctl_block7")
            .setLeft(9)
            .setTop(132)
            .setWidth(414)
            .setHeight(125)
            .setBorderType("inset")
            .setOverflow("hidden")
            );
            
            host.ctl_block7.append((new xui.UI.Slider())
            .setHost(host,"g_step1")
            .setDirtyMark(false)
            .setDisabled(true)
            .setLeft(80)
            .setTop(0)
            .setWidth(181)
            .setHeight(30)
            .setSteps(100)
            .setIsRange(false)
            .setValue("0")
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.ctl_block7.append((new xui.UI.ComboInput())
            .setHost(host,"g_step1clr")
            .setDirtyMark(false)
            .setDisabled(true)
            .setLeft(261)
            .setTop(4)
            .setWidth(91)
            .setType("color")
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.ctl_block7.append((new xui.UI.Slider())
            .setHost(host,"g_step2")
            .setDirtyMark(false)
            .setDisabled(true)
            .setLeft(80)
            .setTop(30)
            .setWidth(181)
            .setHeight(30)
            .setSteps(100)
            .setIsRange(false)
            .setValue("0")
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.ctl_block7.append((new xui.UI.ComboInput())
            .setHost(host,"g_step2clr")
            .setDirtyMark(false)
            .setDisabled(true)
            .setLeft(261)
            .setTop(34)
            .setWidth(91)
            .setType("color")
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.ctl_block7.append((new xui.UI.Slider())
            .setHost(host,"g_step3")
            .setDirtyMark(false)
            .setDisabled(true)
            .setLeft(80)
            .setTop(60)
            .setWidth(181)
            .setHeight(30)
            .setSteps(100)
            .setIsRange(false)
            .setValue("0")
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.ctl_block7.append((new xui.UI.ComboInput())
            .setHost(host,"g_step3clr")
            .setDirtyMark(false)
            .setDisabled(true)
            .setLeft(261)
            .setTop(64)
            .setWidth(91)
            .setType("color")
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.ctl_block7.append((new xui.UI.SCheckBox())
            .setHost(host,"c_step1")
            .setDirtyMark(false)
            .setLeft(10)
            .setTop(2)
            .setCaption("$(RAD.custom_dlg.gradlg.Stop 1)")
            .afterValueSet("_c_step1_aftervalueset")
            );
            
            host.ctl_block7.append((new xui.UI.SCheckBox())
            .setHost(host,"c_step2")
            .setDirtyMark(false)
            .setLeft(10)
            .setTop(32)
            .setCaption("$(RAD.custom_dlg.gradlg.Stop 2)")
            .afterValueSet("_c_step2_aftervalueset")
            );
            
            host.ctl_block7.append((new xui.UI.SCheckBox())
            .setHost(host,"c_step3")
            .setDirtyMark(false)
            .setLeft(10)
            .setTop(62)
            .setCaption("$(RAD.custom_dlg.gradlg.Stop 3)")
            .afterValueSet("_c_step3_aftervalueset")
            );
            
            host.ctl_block7.append((new xui.UI.Slider())
            .setHost(host,"g_step4")
            .setDirtyMark(false)
            .setDisabled(true)
            .setLeft(80)
            .setTop(90)
            .setWidth(181)
            .setHeight(30)
            .setSteps(100)
            .setIsRange(false)
            .setValue("0")
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.ctl_block7.append((new xui.UI.ComboInput())
            .setHost(host,"g_step4clr")
            .setDirtyMark(false)
            .setDisabled(true)
            .setLeft(261)
            .setTop(94)
            .setWidth(91)
            .setType("color")
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.ctl_block7.append((new xui.UI.SCheckBox())
            .setHost(host,"c_step4")
            .setDirtyMark(false)
            .setLeft(10)
            .setTop(92)
            .setCaption("$(RAD.custom_dlg.gradlg.Stop 4)")
            .afterValueSet("_c_step4_aftervalueset")
            );
            
            host.ctl_block7.append((new xui.UI.ComboInput())
            .setHost(host,"g_step1o")
            .setDirtyMark(false)
            .setDisabled(true)
            .setLeft(353)
            .setTop(4)
            .setWidth(51)
            .setType("spin")
            .setIncrement(0.1)
            .setMin(0)
            .setMax(1)
            .setValue(1)
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.ctl_block7.append((new xui.UI.ComboInput())
            .setHost(host,"g_step2o")
            .setDirtyMark(false)
            .setLeft(353)
            .setTop(34)
            .setWidth(51)
            .setType("spin")
            .setIncrement(0.1)
            .setMin(0)
            .setMax(1)
            .setValue(1)
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.ctl_block7.append((new xui.UI.ComboInput())
            .setHost(host,"g_step3o")
            .setDirtyMark(false)
            .setLeft(353)
            .setTop(64)
            .setWidth(51)
            .setType("spin")
            .setIncrement(0.1)
            .setMin(0)
            .setMax(1)
            .setValue(1)
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            host.ctl_block7.append((new xui.UI.ComboInput())
            .setHost(host,"g_step4o")
            .setDirtyMark(false)
            .setLeft(353)
            .setTop(94)
            .setWidth(51)
            .setType("spin")
            .setIncrement(0.1)
            .setMin(0)
            .setMax(1)
            .setValue(1)
            .afterUIValueSet("_t_sd_afteruivalueset")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        _getValues:function(){
            var ns=this,
                arr=[],h,i;

            if(ns.c_step1.getValue()){
                h={pos:ns.g_step1.getValue()+"%",clr:ns.g_step1clr.getValue()||"#ffffff"};
                i=ns.g_step1o.getValue();
                if(parseInt(i*100)!=100)
                    h.opacity=i;
                arr.push(h);
            }
            if(ns.c_step2.getValue()){
                h={pos:ns.g_step2.getValue()+"%",clr:ns.g_step2clr.getValue()||"#ffffff"};
                i=ns.g_step2o.getValue();
                if(parseInt(i*100)!=100)
                    h.opacity=i;
                arr.push(h);
            }
            if(ns.c_step3.getValue()){
                h={pos:ns.g_step3.getValue()+"%",clr:ns.g_step3clr.getValue()||"#ffffff"};
                i=ns.g_step3o.getValue();
                if(parseInt(i*100)!=100)
                    h.opacity=i;
                arr.push(h);
            }
            if(ns.c_step4.getValue()){
                h={pos:ns.g_step4.getValue()+"%",clr:ns.g_step4clr.getValue()||"#ffffff"};
                i=ns.g_step4o.getValue();
                if(parseInt(i*100)!=100)
                    h.opacity=i;
                arr.push(h);
            }
            if(arr.length)
                xui.arr.stableSort(arr,function(x,y){
                    return parseFloat(x.pos)>parseFloat(y.pos)?1:parseFloat(x.pos)==parseFloat(y.pos)?0:-1;
                });
            return  arr;
        },
        _t_sd_afteruivalueset : function (profile){
            xui.resetRun("Gradients",this.setTS,0,null,this);
        },
        setTS:function(){
                var ns=this,
                    ori = ns.t_otype.getValue();
            xui.resetRun("cgradies:"+this.$xid,function(){
                var v={
                    stops:ns._getValues()
                };
                ori=ori.split('-');
                v.type=ori[0];
                v.orient=ori[1];
                if(v.stops.length<=0)
                    v=null;
               
                ns.fireEvent("onChange",[v]);
            });
        },
        init:function(prf,tplkey,prop,type){
            var ns=this;
            xui.merge(ns.properties,prop,'all');

            var v=type==2?tplkey:xui.get(prf.CS,[tplkey, "$gradient"]),
                type,op;
            if(!v){
               v={};
            }
            if(!v.type)v.type='linear';
            if(!v.orient)v.orient='T';
            if(!v.point)v.point='left';
            if(!v.stops)v.stops=[];

            type=v.type+"-"+v.orient;

            ns.t_otype.setValue(type);

            if(v.stops.length>0){
                ns.c_step1.setValue(true,true);
                ns.g_step1.setValue(v.stops[0].pos||0);
                ns.g_step1clr.setValue(v.stops[0].clr||"");
                op=v.stops[0].opacity;
                ns.g_step1o.setValue((op||op===0)?op:1);
            }else{
                ns.c_step1.setValue(false,true);
                ns.g_step1.setValue(0);
                ns.g_step1clr.setValue("");
                ns.g_step1o.setValue(1);
            }
            if(v.stops.length>1){
                ns.c_step2.setValue(true,true);
                ns.g_step2.setValue(v.stops[1].pos||0);
                ns.g_step2clr.setValue(v.stops[1].clr||"");
                op=v.stops[1].opacity;
                ns.g_step2o.setValue((op||op===0)?op:1);
            }else{
                ns.c_step2.setValue(false,true);
                ns.g_step2.setValue(0);
                ns.g_step2clr.setValue("");
                ns.g_step2o.setValue(1);
            }
            if(v.stops.length>2){
                ns.c_step3.setValue(true,true);
                ns.g_step3.setValue(v.stops[2].pos||0);
                ns.g_step3clr.setValue(v.stops[2].clr||"");
                op=v.stops[2].opacity;
                ns.g_step3o.setValue((op||op===0)?op:1);
            }else{
                ns.c_step3.setValue(false,true);
                ns.g_step3.setValue(0);
                ns.g_step3clr.setValue("");
                ns.g_step3o.setValue(1);
            }
            if(v.stops.length>3){
                ns.c_step4.setValue(true,true);
                ns.g_step4.setValue(v.stops[3].pos||0);
                ns.g_step4clr.setValue(v.stops[3].clr||"");
                op=v.stops[3].opacity;
                ns.g_step4o.setValue((op||op===0)?op:1);
            }else{
                ns.c_step4.setValue(false,true);
                ns.g_step4.setValue(0);
                ns.g_step4clr.setValue("");
                ns.g_step4o.setValue(1);
            }
        },
        _ctl_panel4_beforeclose : function (profile){
            profile.boxing().hide();
            return false;
        },
        _c_step1_aftervalueset : function (profile, oldValue, newValue){
            var ns = this;
            ns.g_step1.setValue(0).setDisabled(!newValue);
            ns.g_step1clr.setValue("").setDisabled(!newValue);
            ns.g_step1o.setValue("1").setDisabled(!newValue);
            ns.setTS();
        },
        _c_step2_aftervalueset : function (profile, oldValue, newValue){
            var ns = this;
            ns.g_step2.setValue(0).setDisabled(!newValue);
            ns.g_step2clr.setValue("").setDisabled(!newValue);
            ns.g_step2o.setValue("1").setDisabled(!newValue);
            ns.setTS();
        },
        _c_step3_aftervalueset : function (profile, oldValue, newValue){
            var ns = this;
            ns.g_step3.setValue(0).setDisabled(!newValue);
            ns.g_step3clr.setValue("").setDisabled(!newValue);
            ns.g_step3o.setValue("1").setDisabled(!newValue);
            ns.setTS();
        },
        _c_step4_aftervalueset : function (profile, oldValue, newValue){
            var ns = this;
            ns.g_step4.setValue(0).setDisabled(!newValue);
            ns.g_step4clr.setValue("").setDisabled(!newValue);
            ns.g_step4o.setValue("1").setDisabled(!newValue);
            ns.setTS();
        },
        _clrpatternclicked:function (profile, e, value){
            var ns = this, cs=profile.CS.KEY,gradients=cs.$gradient,stops=gradients.stops;
           ns.c_step4.setValue(false,true);
           ns.g_step4.setValue(0);
           ns.g_step4clr.setValue("");
           ns.g_step4o.setValue(1);

           ns.c_step1.setValue(true,true);
           ns.g_step1.setValue(parseInt(stops[0].pos,10)||0);
           ns.g_step1clr.setValue(stops[0].clr||"");
           ns.g_step1o.setValue(1);

           ns.c_step2.setValue(true,true);
           ns.g_step2.setValue(parseInt(stops[1].pos,10)||0);
           ns.g_step2clr.setValue(stops[1].clr||"");
           ns.g_step2o.setValue(1);
           
            ns.c_step3.setValue(true,true);
            ns.g_step3.setValue(parseInt(stops[2].pos,10)||0);
            ns.g_step3clr.setValue(stops[2].clr||"");
            ns.g_step3o.setValue(1);
        }
    }
});