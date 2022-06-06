function updateStory() {
    save.tick += 1;

    // first karan dialogue runs in Play.js.

    if (Boolean(save.flag["sentFirstMessageKaran"]) && !Boolean(save.flag["ran_d1_nkA"])) {
        runSlice("d1_nkA", "nk");
        save.flag["ran_d1_nkA"] = true;
    }
    if (Boolean(save.flag["sentFirstMessageNidia"]) && !Boolean(save.flag["ran_d1_kcB"])) {
        runSlice("d1_kcB", "kc");
        save.flag["ran_d1_kcB"] = true;
    }
    if (Boolean(save.flag["finishedTutorial"]) && !Boolean(save.flag["ran_d1_mA"])) {
        runSlice("d1_mA", "m");
        save.flag["ran_d1_mA"] = true;
    }

    if (Boolean(save.flag["finishedFirstConvoMom"]) && !Boolean(save.flag["ran_d1_fA"])) {
        runSlice("d1_fA", "f");
        save.flag["ran_d1_fA"] = true;
    }
    if (Boolean(save.flag["finishedFirstConvoFriend"]) && !Boolean(save.flag["ran_d1_kcC"])) {
        runSlice("d1_kcC", "kc");
        save.flag["ran_d1_kcC"] = true;
    }
    if (Boolean(save.flag["sendFirstClient"]) && !Boolean(save.flag["ran_d1_fjA"])) {
        runSlice("d1_fjA", "fj");
        save.flag["ran_d1_fjA"] = true;
    }

    // FELIX & TRISH
    if (Boolean(save.flag["finishedFirstConvoFelix"]) && !Boolean(save.flag["ran_d1_tpA"])) {
        runSlice("d1_tpA", "tp");
        save.flag["ran_d1_tpA"] = true;
    }

    if (Boolean(save.flag["tpA_openingLine"] + 1)) {
        switch (save.flag["tpA_openingLine"]) {
            case 0:
                runSlice("d1_tpB1", "tp");
                break;
            case 1:
                runSlice("d1_tpB0", "tp");
                break;
        }
        save.flag["tpA_openingLine"] = -1;
    }

    if (Boolean(save.flag["d1_tpB1_choiceCoffeeTea"] + 1)) {
        switch (save.flag["d1_tpB1_choiceCoffeeTea"]) {
            case 0:
                runSlice("d1_tpC1", "tp");
                break;
            case 1:
                runSlice("d1_tpC2", "tp");
                break;
        }
        save.flag["d1_tpB1_choiceCoffeeTea"] = -1;
    }

    if (Boolean(save.flag["d1_tpC1_choiceLocation"] + 1)) {
        switch (save.flag["d1_tpC1_choiceLocation"]) {
            case 0:
                runSlice("d1_tpD1", "tp");
                break;
            case 1:
                runSlice("d1_tpE3", "tp");
                break;
        }
        save.flag["d1_tpC1_choiceLocation"] = -1;
    }

    if (Boolean(save.flag["d1_tpC2_choiceAssertion"] + 1)) {
        switch (save.flag["d1_tpC2_choiceAssertion"]) {
            case 0:
                runSlice("d1_tpD2", "tp");
                break;
            case 1:
                runSlice("d1_tpD3", "tp");
                break;
        }
        save.flag["d1_tpC2_choiceAssertion"] = -1;
    }

    if (Boolean(save.flag["d1_tpD1_choiceBarstucks"] + 1)) {
        switch (save.flag["d1_tpD1_choiceBarstucks"]) {
            case 0:
                runSlice("d1_tpE1", "tp");
                break;
            case 1:
                runSlice("d1_tpE2", "tp");
                break;
            case 2: 
                runSlice("d1_tpE3", "tp");
                break;
        }
        save.flag["d1_tpD1_choiceBarstucks"] = -1;
    }
    
    if (Boolean(save.flag["d1_tpD2_choiceDate"] + 1)) {
        switch (save.flag["d1_tpD2_choiceDate"]) {
            case 0:
                runSlice("d1_tpE1", "tp");
                break;
            case 1:
                runSlice("d1_tpC1", "tp");
                break;
        }
        save.flag["d1_tpD2_choiceDate"] = -1;
    }

    if (Boolean(save.flag["d1_tpD3_liedToTrish"]) && !Boolean(save.flag["ran_d1_fjB1"])) {
        runSlice("d1_fjB1", "fj");
        save.flag["ran_d1_fjB1"] = true;
    }
    if (Boolean(save.flag["d1_fjB1_talkedtoFelix"]) && !Boolean(save.flag["ran_d1_tpE4"])) {
        runSlice("d1_tpE4", "tp");
        save.flag["ran_d1_tpE4"] = true;
    }

    if (Boolean(save.flag["d1_tpE4_aboutTea"] + 1)) {
        switch (save.flag["d1_tpE4_aboutTea"]) {
            case 0:
                runSlice("d1_tpF1", "tp");
                break;
            case 1:
                runSlice("d1_tpE1", "tp");
                break;
        }
        save.flag["d1_tpE4_aboutTea"] = -1;
    }

    if (Boolean(save.flag["d1_tpF1_choiceDate"] + 1)) {
        switch (save.flag["d1_tpF1_choiceDate"]) {
            case 0:
                runSlice("d1_tpB0", "tp");
                break;
            case 1:
                runSlice("d1_tpG1", "tp");
                break;
        }
        save.flag["d1_tpF1_choiceDate"] = -1;
    }

    if (Boolean(save.flag["tpFail"]) && !Boolean(save.flag["ran_d1_nk_tpFail"])) {
        runSlice("d1_nk_tpFail", "nk");
        save.flag["ran_d1_nk_tpFail"] = true;
    }
    if (((Boolean(save.flag["tpSuccessA"])) || (Boolean(save.flag["tpSuccessB"])) || (Boolean(save.flag["tpSuccessC"]))) && !Boolean(save.flag["ran_d1_nk_tpSuccess"])) {
        runSlice("d1_nk_tpSuccess", "nk");
        save.flag["ran_d1_nk_tpSuccess"] = true;
    }

    if ((Boolean(save.flag["tpFail"]) && (Boolean(save.flag["tpDebrief"]))) && !Boolean(save.flag["ran_d1_fj_tpFail"])) {
        runSlice("d1_fj_tpFail", "fj");
        save.flag["ran_d1_fj_tpFail"] = true;
    }
    if ((Boolean(save.flag["tpSuccessA"]) && (Boolean(save.flag["tpDebrief"]))) && !Boolean(save.flag["ran_d1_fj_tpSuccessA"])) {
        runSlice("d1_fj_tpSuccessA", "fj");
        save.flag["ran_d1_fj_tpSuccessA"] = true;
    }
    if ((Boolean(save.flag["tpSuccessB"]) && (Boolean(save.flag["tpDebrief"]))) && !Boolean(save.flag["ran_d1_fj_tpSuccessB"])) {
        runSlice("d1_fj_tpSuccessB", "fj");
        save.flag["ran_d1_fj_tpSuccessB"] = true;
    }
    if ((Boolean(save.flag["tpSuccessC"]) && (Boolean(save.flag["tpDebrief"]))) && !Boolean(save.flag["ran_d1_fj_tpSuccessC"])) {
        runSlice("d1_fj_tpSuccessC", "fj");
        save.flag["ran_d1_fj_tpSuccessC"] = true;
    }

    if ((Boolean(save.flag["d1_end"])) && !Boolean(save.flag["ran_d1_mB"])) {
        runSlice("d1_mB", "m");
        save.flag["ran_d1_mB"] = true;
    }

    if ((Boolean(save.flag["d1_end"])) && !Boolean(save.flag["ran_d1_mB"])) {
        runSlice("d1_mB", "m");
        save.flag["ran_d1_mB"] = true;
        save["flag"]["endDelay"] = 0;
    }
    
    if (Boolean(save.flag["END"])) {
        if (save["flag"]["endDelay"] < 1000) {
            save["flag"]["endDelay"] += 1;
        } else {
            changeScene("Credits");
        }
    }
    
    
    
    


} 