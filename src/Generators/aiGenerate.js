const generatorFunction = (fname, inside, returnvalue) => {
  return `const ${fname} = async () => {\n
    ${inside}
    return ${returnvalue};
    }`;
};

const generator = () => {
  //call async func
  Blockly.JavaScript["bot_callfunc"] = function(block) {
    var text_name = block.getFieldValue("NAME");
    var code = `${text_name};`;
    return code;
  };

  //makes async func for network request
  Blockly.JavaScript["bot_asyncfunc"] = function(block) {
    let text_fname = block.getFieldValue("FNNAME");
    let statements_function_name = Blockly.JavaScript.statementToCode(
      block,
      "function_name"
    );
    let value_return_value = Blockly.JavaScript.valueToCode(
      block,
      "RETURN_VALUE",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let code = generatorFunction(
      text_fname,
      statements_function_name,
      value_return_value
    );
    return code;
  };

  //makes the bot send text to the screen
  Blockly.JavaScript["bot_sendtext"] = function(block) {
    let bot_value = Blockly.JavaScript.valueToCode(
      block,
      "BOT_VALUE",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let code = `Bot.send(${bot_value});\n`;
    return code;
  };

  //puts the bot to sleep
  Blockly.JavaScript["bot_sleep"] = function(block) {
    let bot_value = Blockly.JavaScript.valueToCode(
      block,
      "BOT_SLEEP_VALUE",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let code = `await Bot.sleep(${bot_value});\n`;
    return code;
  };

  //fetches the noun
  Blockly.JavaScript["bot_getnoun"] = function(block) {
    let text_param = block.getFieldValue("NOUN_PARAM");
    let code = `Campk12.getNoun("${text_param}");\n`;
    return code;
  };

  //fetches the proper noun
  Blockly.JavaScript["bot_getpropernoun"] = function(block) {
    let text_proper_param = block.getFieldValue("NOUN_PROPER_PARAM");
    let code = `Campk12.getProperNouns("${text_proper_param}");\n`;
    return code;
  };

  //fetches the proper noun
  Blockly.JavaScript["bot_getpronoun"] = function(block) {
    let text_pronoun_param = block.getFieldValue("NOUN_PRONOUN_PARAM");
    let code = `Campk12.getPronouns("${text_pronoun_param}");\n`;
    return code;
  };

  //fetches the modal speech
  Blockly.JavaScript["bot_getmodals"] = function(block) {
    let text_modal_param = block.getFieldValue("MODALS_PARAM");
    let code = `Campk12.getModals("${text_modal_param}");\n`;
    return code;
  };

  //fetches the verb
  Blockly.JavaScript["bot_getverbs"] = function(block) {
    let text_param = block.getFieldValue("VERB_PARAM");
    let code = `Campk12.getVerbs("${text_param}");\n`;
    return code;
  };

  //fetches the Adverb
  Blockly.JavaScript["bot_getadverbs"] = function(block) {
    let text_adverb_param = block.getFieldValue("ADVERBS_PARAM");
    let code = `Campk12.getAdVerbs("${text_adverb_param}");\n`;
    return code;
  };

  //fetches the Adjectivs
  Blockly.JavaScript["bot_getadjectives"] = function(block) {
    let text_adverb_param = block.getFieldValue("ADJECTIVES_PARAM");
    let code = `Campk12.getAdjectives("${text_adverb_param}");\n`;
    return code;
  };

  //fetches the prepositions
  Blockly.JavaScript["bot_getprepositions"] = function(block) {
    let text_prep_param = block.getFieldValue("PREPOSITION_PARAM");
    let code = `Campk12.getPrepositions("${text_prep_param}");\n`;
    return code;
  };

  //fetches the translation
  Blockly.JavaScript["bot_translate"] = function(block) {
    let text_name = block.getFieldValue("TEXT");
    let text_inlang = block.getFieldValue("INLANG");
    let text_outlang = block.getFieldValue("OUTLANG");
    let code = `await Campk12.translate("${text_name}", "${text_inlang}", "${text_outlang}");\n`;
    return code;
  };

  //fetches the sentimental score -1 to 1
  Blockly.JavaScript["bot_sentiment"] = function(block) {
    let text_sentiment = block.getFieldValue("SENTIMENTTEXT");
    let code = `await Campk12.getSentimentScore("${text_sentiment}");\n`;
    return code;
  };

  //makes the bot smart with smart reply
  Blockly.JavaScript["bot_smarttalk"] = function(block) {
    let bot_value = Blockly.JavaScript.valueToCode(
      block,
      "BOT_SMART_VALUE",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let code = `await CampK12.respondWithSmallTalk(${bot_value});\n`;
    return code;
  };

  //fetches the tags from statement
  Blockly.JavaScript["bot_extracttags"] = function(block) {
    let text_tags = block.getFieldValue("EXTRACT_TAGS");
    let code = `await Campk12.extractTags("${text_tags}");\n`;
    return code;
  };

  //fetches the entities from statement
  Blockly.JavaScript["bot_extractentities"] = function(block) {
    let text_entites = block.getFieldValue("EXTRACT_ENTITIES");
    let code = `await Campk12.extractEntities("${text_entites}");\n`;
    return code;
  };

  //fetches the conjugates
  Blockly.JavaScript["bot_getconjugates"] = function(block) {
    let text_pro = block.getFieldValue("EXTRACT_PRO");
    let text_verb = block.getFieldValue("EXTRACT_VERB");
    let bot_append = Blockly.JavaScript.valueToCode(
      block,
      "BOT_APPEND",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    let code = `CampK12.getConjugate('${text_pro}', '${text_verb}', ${bot_append});\n`;
    return code;
  };
};

export default generator;
