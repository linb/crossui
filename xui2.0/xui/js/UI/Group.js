Class("xui.UI.Group", "xui.UI.Panel",{
    Static:{
        Templates:{
            tagName : 'div',
            style:'{_style}',
            className:'{_className}',
            BORDER:{
                tagName : 'fieldset',
                className: '{_fieldCls} xui-uibar-top2',
                TBAR:{
                    tagName : 'legend',
                    style:'{_align}',
                    BARCMDL:{
                        LTAGCMDS:{
                            tagName:'span',
                            className:'xui-ltag-cmds',
                            style:'{_ltagDisplay}',
                            text:"{ltagCmds}"
                        },
                        TOGGLE:{
                            $order:1,
                            className: 'xuifont',
                            $fonticon:'{_fi_toggleCls2}',
                            style:'{toggleDisplay}',
                            $order:0
                        },
                        ICON:{
                            $order:2,
                            className:'xuicon {imageClass}',
                            style:'{backgroundImage}{backgroundPosition}{backgroundSize}{backgroundRepeat}{imageDisplay}',
                            text:'{iconFontCode}'
                        },
                        CAPTION : {
                            tabindex: '{tabindex}',
                            className:"xui-title-node",
                            text:   '{caption}',
                            $order:3
                        }
                    },
                    BARCMDR:{
                    $order:4,
                        tagName: 'div',
                        className:'xui-uibar-cmdr xui-uibase',
                        RTAGCMDS:{
                            $order:0,
                            tagName:'span',
                            className:'xui-rtag-cmds',
                            style:'{_rtagDisplay}',
                            text:"{rtagCmds}"
                        } ,
                        INFO:{
                            className:'xuicon',
                            $fonticon:'xui-uicmd-info',
                            style:'{infoDisplay}',
                            $order:1
                        },
                        OPT:{
                            className:'xuicon',
                            $fonticon:'xui-uicmd-opt',
                            style:'{optDisplay}',
                            $order:2
                        },
                        POP:{
                            className:'xuicon',
                            $fonticon:'xui-uicmd-pop',
                                style:'{popDisplay}',
                            $order:3
                        },
                        REFRESH:{
                            className:'xuicon',
                            $fonticon:'xui-uicmd-refresh',
                            style:'{refreshDisplay}',
                            $order:4
                        },
                        CLOSE:{
                            className:'xuicon',
                            $fonticon:'xui-uicmd-close',
                            style:'{closeDisplay}',
                            $order:5
                        }
                    }
                },
                PANEL:{
                    $order:1,
                    tagName:'div',
                    style:'{panelDisplay};{_panelstyle};{_overflow};',
                    className:'xui-uicontainer',
                    text:'{html}'+xui.UI.$childTag
                }
            },
            $submap:xui.UI.$getTagCmdsTpl()
        },
        Appearances:{
            KEY:{
                zoom:xui.browser.ie6?"1":null
            },
            BORDER:{
                position:'relative',
                overflow:'visible',
                zoom:xui.browser.ie6?"1":null
            },
            TBAR:{
                'margin-left':'.5em',
                'padding-bottom': '.1666667em'
            },
            'BORDER-checked TBAR':{
                'margin-left':'-.5em'
            },
            'BORDER-checked BARCMDL':{
                'padding-left':'1em'
            },
            BARCMDL:{
                cursor:'default',
                'padding-right':'.25em',
                display:xui.$inlineBlock
            },
            PANEL:{
                position:'relative',
                overflow:'auto',
                'line-height':'auto',
                 background:xui.browser.ie?'url('+xui.ini.img_bg+') no-repeat left top':null
            },
            CAPTION:{
                display:'inline',
                'vertical-align':xui.browser.ie6?'baseline':'middle'
            },
            TOGGLE:{
                padding:'0 .334em 0 .1667em'
            }
        },
        DataModel:{
            dock:'none',
            noFrame:null,
            borderType:null
        },
        _prepareData:function(profile){
            var data=arguments.callee.upper.call(this, profile);
            if(!profile.properties.toggle)data.height="auto";
            data._fieldCls = data.toggleBtn&&!data.toggle?' xui-uiborder-t':' xui-uiborder-flat xui-uiborder-radius';
            return data;
        },
        _toggle:function(profile, value, ignoreEvent){
            var p=profile.properties, ins=profile.boxing();

            //event
            if(value){
                ins.iniPanelView();
            }
            if(ignoreEvent || profile._toggle !== !!value){
                //set toggle mark
                profile._toggle = p.toggle = !!value;
                if(!ignoreEvent){
                    if(value){
                        if(ins.beforeExpand && false===ins.beforeExpand(profile))return;
                    }else{
                        if(ins.beforeFold && false===ins.beforeFold(profile))return;
                    }
                }
                //chang toggle button
                if(p.toggleBtn)
                    profile.getSubNode('TOGGLE').tagClass('-checked', !!value);
                
                var border=profile.getSubNode('BORDER')
                if(value)
                    border.removeClass('xui-uiborder-t').addClass('xui-uiborder-flat xui-uiborder-radius');
                else
                    border.removeClass('xui-uiborder-flat xui-uiborder-radius').addClass('xui-uiborder-t');

                // use onresize function
                profile.adjustSize();

                if(!ignoreEvent){
                    if(value){
                        if(ins.afterExpand)
                            ins.afterExpand(profile);
                    }else{
                        if(ins.afterFold)
                            ins.afterFold(profile);
                    }
                }
                // try redock
                if(p.dock && p.dock!='none'){
                    ins.adjustDock(true);
                }
            }
        },
        _onresize:function(profile,width,height){
            var prop=profile.properties,
                // compare with px
                us = xui.$us(prop),
                adjustunit = function(v,emRate){return profile.$forceu(v, us>0?'em':'px', emRate)},

                border = profile.getSubNode('BORDER'),
                panel =profile.getSubNode('PANEL'), 

                // caculate by px
                ww=width?profile.$px(width):null, 
                hh=height?profile.$px(height):null;

            if(profile._toggle){
                panel.css('display','');
                if(height && height!='auto'){
                    border.height(adjustunit(hh, border));
                    hh -= profile.getSubNode('TBAR').height()||18;
                    panel.height(adjustunit(hh, panel) );
                }
            }else{
                panel.css('display','none');
                // for expand status:
                //    height is set in upper function
                // for fold status:
                //    if display => adjust ctrl's height to legend's
                //    if non-display => adjust ctrl's height to 'auto'
                height = profile.getSubNode('TBAR').height();
                height = height?adjustunit(height):null;
                profile.getRoot().height(height || 'auto');
                if(height && height!='auto'){
                    border.height(height);
                }
            }
            if(width && width!='auto' && ww>=2 && profile._toggle){
                panel.width(ww = adjustunit(ww-2));
                xui.UI._adjustConW(profile, panel, ww);
            }
        }
    }
});