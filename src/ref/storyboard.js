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

    if (Boolean(save.flag["finishedFirstConvoFelix"]) && !Boolean(save.flag["ran_d1_tpA"])) {
        runSlice("d1_tpA", "tp");
        save.flag["ran_d1_tpA"] = true;
    }

    if (Boolean(save.flag["finishedFirstConvoFelix"]) && Boolean(save.flag["tpA_openingLine"] + 1)) {
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

    if (Boolean(save.flag["endOfDemo"]) && !Boolean(save.flag["ran_d1_endOfDemo"])) {
        runSlice("d1_endOfDemo", "tp");
        save.flag["ran_d1_endOfDemo"] = true;
    }
    


} 