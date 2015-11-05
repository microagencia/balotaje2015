$(document).ready(function() {
	
	
	var param = getParameterByName('v');
	
	
    var iniDS = 0,
        iniBLDS = 0,
		iniMM = 1,
		iniBLMM = 0,
		iniSM = .5,
		iniBLSM = 0,
		iniDC = .5,
		iniBLDC = 0,
		iniMS = .5,
		iniBLMS = 0,
		iniRS = .5,
		iniBLRS = 0,
		iniRS = .5,
		iniBLRS = 0,
		iniBL = .5,
		iniBLBL = 1,
		iniAN = .5,
		iniBLAN = 1,
		iniAU = .5,
		iniBLAU = 1,
		
        ini   = .5,
		
		
        steps = 101;

	//TODO pasar esto a un array
	/*console.log(param.length);
	console.log(8 * 2 * 3);*/
	if(param.length == (9 * 2 * 3)){
	    var i = 0;
		iniDS = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniBLDS = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniMM = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniBLMM = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniSM = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniBLSM = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniDC = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniBLDC = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniMS = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniBLMS = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniRS = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniBLRS = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniBL =  Number(param.substring(i, i+3))/100;
		i = i+3;
		iniBLBL = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniAN = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniBLAN = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniAU = Number(param.substring(i, i+3))/100;
		i = i+3;
		iniBLAU = Number(param.substring(i, i+3))/100;
	}
		
		
    var votos = {
        'DS': 9338449,
        'MM': 8601063,
        'SM': 5386965,
        'DC': 812530,
        'MS': 632551,
        'RS': 412577,
		'BL': 664739,
		'AN': 199446,
		'AU': 6015089
    };

    var sliderDS = new Dragdealer('sliderDS', {
        steps: steps,
        x: iniDS,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDS_B = new Dragdealer('sliderDS_B', {
        steps: steps,
        x: iniBLDS,
        animationCallback: function(x, y) {
            $('#sliderDS_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMM = new Dragdealer('sliderMM', {
        steps: steps,
        x: iniMM,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMM_B = new Dragdealer('sliderMM_B', {
        steps: steps,
        x: iniBLMM,
        animationCallback: function(x, y) {
            $('#sliderMM_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderSM = new Dragdealer('sliderSM', {
        steps: steps,
        x: iniSM,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderSM_B = new Dragdealer('sliderSM_B', {
        steps: steps,
        x: iniBLSM,
        animationCallback: function(x, y) {
            $('#sliderSM_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDC = new Dragdealer('sliderDC', {
        steps: steps,
        x: iniDC,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDC_B = new Dragdealer('sliderDC_B', {
        steps: steps,
        x: iniBLDC,
        animationCallback: function(x, y) {
            $('#sliderDC_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMS = new Dragdealer('sliderMS', {
        steps: steps,
        x: iniMS,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMS_B = new Dragdealer('sliderMS_B', {
        steps: steps,
        x: iniBLMS,
        animationCallback: function(x, y) {
            $('#sliderMS_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderRS = new Dragdealer('sliderRS', {
        steps: steps,
        x: iniRS,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderRS_B = new Dragdealer('sliderRS_B', {
        steps: steps,
        x: iniBLRS,
        animationCallback: function(x, y) {
            $('#sliderRS_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });
	
	var sliderBL = new Dragdealer('sliderBL', {
        steps: steps,
        x: iniBL,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderBL_B = new Dragdealer('sliderBL_B', {
        steps: steps,
        x: iniBLBL,
        animationCallback: function(x, y) {
            $('#sliderBL_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });
	
	 var sliderAN = new Dragdealer('sliderAN', {
        steps: steps,
        x: iniAN,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderAN_B = new Dragdealer('sliderAN_B', {
        steps: steps,
        x: iniBLAN,
        animationCallback: function(x, y) {
            $('#sliderAN_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });
	
	var sliderAU = new Dragdealer('sliderAU', {
        steps: steps,
        x: iniAU,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderAU_B = new Dragdealer('sliderAU_B', {
        steps: steps,
        x: iniBLAU,
        animationCallback: function(x, y) {
            $('#sliderAU_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliders = {
        'DS': sliderDS,
        'MM': sliderMM,
        'SM': sliderSM,
        'DC': sliderDC,
        'MS': sliderMS,
        'RS': sliderRS,
		'BL': sliderBL,
		'AN': sliderAN,
		'AU': sliderAU,
        'DSB': sliderDS_B,
        'MMB': sliderMM_B,
        'SMB': sliderSM_B,
        'DCB': sliderDC_B,
        'MSB': sliderMS_B,
        'RSB': sliderRS_B,
		'BLB': sliderBL_B,
		'ANB': sliderAN_B,
		'AUB': sliderAU_B

    };

    // ini
    actualizar(iniDS, sliderDS);
    actualizar(iniMM, sliderMM);
    actualizar(iniSM, sliderSM);
    actualizar(iniDC, sliderDC);
    actualizar(iniMS, sliderMS);
    actualizar(iniRS, sliderRS);
	actualizar(iniBL, sliderBL);
	actualizar(iniAN, sliderAN);
	actualizar(iniAU, sliderAU);
    resultado(sliders, votos);

});

function actualizar(v, slider) {
    var wrapper = $(slider.wrapper),
        div = wrapper.parents('.candidato'),
        val = Math.round(v*100);
    // indicador
    var indDS = div.find('.indicador.DS'),
        indMM = div.find('.indicador.MM');
    indDS.css('opacity', 1-val/100);
    indMM.css('opacity', val/100);
    // valor
    var valDS = div.find('.valor.DS'),
        valMM = div.find('.valor.MM');
    valDS.html(100-val+"%");
    valMM.html(val+"%");
}

function resultado(sliders, votos) {
    var vDS = sliders.DS.getValue()[0],
        vMM = sliders.MM.getValue()[0],
        vSM = sliders.SM.getValue()[0],
        vDC = sliders.DC.getValue()[0],
        vMS = sliders.MS.getValue()[0],
        vRS = sliders.RS.getValue()[0],
		vBL = sliders.BL.getValue()[0],
		vAN = sliders.AN.getValue()[0],
		vAU = sliders.AU.getValue()[0],
        bDS = sliders.DSB.getValue()[0],
        bMM = sliders.MMB.getValue()[0],
        bSM = sliders.SMB.getValue()[0],
        bDC = sliders.DCB.getValue()[0],
        bMS = sliders.MSB.getValue()[0],
        bRS = sliders.RSB.getValue()[0],
		bBL = sliders.BLB.getValue()[0],
		bAN = sliders.ANB.getValue()[0];
		bAU = sliders.AUB.getValue()[0];


	var v = nF(vDS)+nF(bDS)+
			nF(vMM)+nF(bMM)+
			nF(vSM)+nF(bSM)+
			nF(vDC)+nF(bDC)+
			nF(vMS)+nF(bMS)+
			nF(vRS)+nF(bRS)+
			nF(vBL)+nF(bBL)+
			nF(vAN)+nF(bAN)+
			nF(vAU)+nF(bAU);
			
	 
	
	
	
	
	
    var tDS;
    tDS = votos.DS - (votos.DS * bDS);
    tDS *= 1 - vDS;

    var tMM;
    tMM = votos.MM - (votos.MM * bMM);
    tMM *= vMM;


    var tSM;
    tSM = votos.SM - (votos.SM * bSM);
    tDS += tSM * (1 - vSM);
    tMM += tSM * vSM;

    var tDC;
    tDC = votos.DC - (votos.DC * bDC);
    tDS += tDC * (1 - vDC);
    tMM += tDC * vDC;

    var tMS;
    tMS = votos.MS - (votos.MS * bMS);
    tDS += tMS * (1 - vMS);
    tMM += tMS * vMS;

    var tRS;
    tRS = votos.RS - (votos.RS * bRS);
    tDS += tRS * (1 - vRS);
    tMM += tRS * vRS;
	
	var tBL;
    tBL = votos.BL - (votos.BL * bBL);
    tDS += tBL * (1 - vBL);
    tMM += tBL * vBL;

	var tAN;
    tAN = votos.AN - (votos.AN * bAN);
    tDS += tAN * (1 - vAN);
    tMM += tAN * vAN;
	
	var tAU;
    tAU = votos.AU - (votos.AU * bAU);
    tDS += tAU * (1 - vAU);
    tMM += tAU * vAU;
	
	
    var total = tDS + tMM,
        pDS = tDS / total * 100,
        pMM = tMM / total * 100;

    var divDS = $('.resultados').find('.valor.DS'),
        divMM = $('.resultados').find('.valor.MM');

    $('.resultados').find('.valor.DS').text(pDS.toFixed(2) + '%');
    $('.resultados').find('.valor.MM').text(pMM.toFixed(2) + '%');
    var ganador = "";
    if(pDS !== 50) {
        if(pDS > 50) {
            divDS.css('font-weight', 'bold');
            divMM.css('font-weight', 'normal');
            divDS.siblings('h2').css('font-weight', 'bold');
            divMM.siblings('h2').css('font-weight', 'normal');
            divDS.parent().siblings('.glyphicon').removeClass('glyphicon-hand-right').addClass('glyphicon-hand-left');
			ganador = "y me dió que gana Scioli";
        } else {
            divDS.css('font-weight', 'normal');
            divMM.css('font-weight', 'bold');
            divDS.siblings('h2').css('font-weight', 'normal');
            divMM.siblings('h2').css('font-weight', 'bold');
            divMM.parent().siblings('.glyphicon').removeClass('glyphicon-hand-left').addClass('glyphicon-hand-right');
			ganador = "y me dió que gana Macri";
        }
    }
	var texto  = "Simulé el balotaje " + ganador + ". Mirá mi simulación: http://microagencia.github.io/balotaje2015/?v=" + v;
 
	$('#twlink').attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(texto));
}
 

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function nF(num) {
	var s = "" + num + "000";
	return s.slice(0, 1) + s.slice(2, 4);
}