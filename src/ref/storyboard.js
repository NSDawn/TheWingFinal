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
    


} 