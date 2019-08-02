const blocks = () => {
  let _botColor = "#618dfa";

  function blocklyImage() {
    return new Blockly.FieldImage(
      "https://www.gstatic.com/codesite/ph/images/star_on.gif",
      15,
      15,
      "*"
    );
  }

  //call the async function
  Blockly.Blocks["bot_callfunc"] = {
    init: function() {
      this.appendDummyInput().appendField(
        new Blockly.FieldTextInput("your_function ( )"),
        "NAME"
      );
      this.setColour(230);
      this.setTooltip("calls the function ");
      this.setHelpUrl("");
    }
  };

  // async function for server ping
  Blockly.Blocks["bot_asyncfunc"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldLabelSerializable("async function "),
          "NAME1"
        )
        .appendField(new Blockly.FieldTextInput("your_function"), "FNNAME")
        .appendField(new Blockly.FieldLabelSerializable("( ) {"), "NAME2");
      this.appendStatementInput("function_name")
        .setCheck(null)
        .appendField(blocklyImage());
      this.appendValueInput("RETURN_VALUE")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("return");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Gives an asynchronous function wrapper ");
      this.setHelpUrl("");
    }
  };

  // bot to send text
  Blockly.Blocks["bot_sendtext"] = {
    init: function() {
      this.appendValueInput("BOT_VALUE")
        .setCheck(null)
        .appendField(blocklyImage())
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Bot.send");
      this.appendDummyInput().appendField("message");
      this.setInputsInline(true);
      this.setPreviousStatement(true, String);
      this.setNextStatement(true, String);
      this.setColour(_botColor);
      this.setTooltip("Sends a message via the chatbot");
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot to make bot sleep
  Blockly.Blocks["bot_sleep"] = {
    init: function() {
      this.appendValueInput("BOT_SLEEP_VALUE")
        .setCheck(null)
        .appendField(blocklyImage())
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Bot.sleep");
      this.appendDummyInput().appendField("ms");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(_botColor);
      this.setTooltip(
        "Puts an hold to the chatbot for the given amount of time in ms"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot to get nouns
  Blockly.Blocks["bot_getnoun"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("with: Campk12.getNoun")
        .appendField(new Blockly.FieldTextInput("yourSentence"), "NOUN_PARAM");

      this.setColour(_botColor);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(
        "Return an array[] of string consisting of just nouns typed in"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot to get proper nouns
  Blockly.Blocks["bot_getpropernoun"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("with: Campk12.getProperNouns")
        .appendField(
          new Blockly.FieldTextInput("yourSentence"),
          "NOUN_PROPER_PARAM"
        );
      this.setColour(_botColor);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(
        "Return an array[] of string consisting of proper nouns typed in"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot to get pronouns
  Blockly.Blocks["bot_getpronoun"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("with: Campk12.getProNouns")
        .appendField(
          new Blockly.FieldTextInput("yourSentence"),
          "NOUN_PRONOUN_PARAM"
        );
      this.setColour(_botColor);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(
        "Return an array[] of string consisting of just pronouns typed in"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot to get modals
  Blockly.Blocks["bot_getmodals"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("with: Campk12.getModals")
        .appendField(
          new Blockly.FieldTextInput("yourSentence"),
          "MODALS_PARAM"
        );
      this.setColour(_botColor);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(
        "Return an array[] of string consisting of just modals typed in"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot to get prepositions
  Blockly.Blocks["bot_getprepositions"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("with: Campk12.getPrepositions")
        .appendField(
          new Blockly.FieldTextInput("yourSentence"),
          "PREPOSITION_PARAM"
        );
      this.setColour(_botColor);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(
        "Return an array[] of string consisting of just prepositions typed in"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot to get verbs
  Blockly.Blocks["bot_getverbs"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("with: Campk12.getVerbs")
        .appendField(new Blockly.FieldTextInput("yourSentence"), "VERB_PARAM");
      this.setColour(_botColor);

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(
        "Return an array[] of string consisting of just verbs typed in"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot to get adverbs
  Blockly.Blocks["bot_getadverbs"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("with: Campk12.getAdVerbs")
        .appendField(
          new Blockly.FieldTextInput("yourSentence"),
          "ADVERBS_PARAM"
        );
      this.setColour(_botColor);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(
        "Return an array[] of string consisting of  Adverbs typed in"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot to get adjectives
  Blockly.Blocks["bot_getadjectives"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("with: Campk12.getAdjectives")
        .appendField(
          new Blockly.FieldTextInput("yourSentence"),
          "ADJECTIVES_PARAM"
        );
      this.setColour(_botColor);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(
        "Return an array[] of string consisting of Adjectives typed in"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot to translate
  Blockly.Blocks["bot_translate"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Campk12.translate")

        .appendField(new Blockly.FieldTextInput("inputText"), "TEXT")
        .appendField(new Blockly.FieldTextInput("inputLanguage"), "INLANG")
        .appendField(
          new Blockly.FieldTextInput("translateLanguage"),
          "OUTLANG"
        );
      this.setColour(_botColor);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(
        "Makes an api call to translatean input from one language to another"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot to get sentimental analysis
  Blockly.Blocks["bot_sentiment"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("get score with Campk12.getSentimentScore ")
        .appendField(
          new Blockly.FieldTextInput("inputSentiment"),
          "SENTIMENTTEXT"
        )
        .appendField("message");
      this.setColour(_botColor);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(
        "returns a number whose value is between -1 to 1, consisting of sentiment score the predicts the sentiment of the input text. Uses a Sentiment Analyser"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot for smart reply
  Blockly.Blocks["bot_smarttalk"] = {
    init: function() {
      this.appendValueInput("BOT_SMART_VALUE")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("get smart reply with: Campk12.respondWithSmallTalk");
      this.setInputsInline(true);
      this.setPreviousStatement(true, String);
      this.setNextStatement(true, String);
      this.setColour(_botColor);
      this.setTooltip("An artificial intelligent chatBot");
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot for extracting tags
  Blockly.Blocks["bot_extracttags"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("extract tags with: Campk12.extractTags")
        .appendField(new Blockly.FieldTextInput("inputTags"), "EXTRACT_TAGS")
        .appendField("message");
      this.setPreviousStatement(true, String);
      this.setNextStatement(true, String);
      this.setColour(_botColor);
      this.setTooltip(
        "Return an array[] of string consisting of just TAGS typed in"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot for extracting entities
  Blockly.Blocks["bot_extractentities"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("extract entity with: Campk12.extractEntities")
        .appendField(
          new Blockly.FieldTextInput("inputEntities"),
          "EXTRACT_ENTITIES"
        )
        .appendField("message");
      this.setPreviousStatement(true, String);
      this.setNextStatement(true, String);
      this.setColour(_botColor);
      this.setTooltip(
        "Return an array[] of string consisting of just ENTITIES typed in"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };

  // bot for extracting conjugates
  Blockly.Blocks["bot_getconjugates"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("with: Campk12.getConjugate")
        .appendField(new Blockly.FieldTextInput("inputPronoun"), "EXTRACT_PRO")
        .appendField(new Blockly.FieldTextInput("inputVerb"), "EXTRACT_VERB");
      this.appendDummyInput().appendField("& set append to ");
      this.appendValueInput("BOT_APPEND")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT);
      this.setInputsInline(true);
      this.setPreviousStatement(true, String);
      this.setNextStatement(true, String);
      this.setColour(_botColor);
      this.setTooltip(
        "Return an array[] of string consisting of just ENTITIES typed in"
      );
      this.setHelpUrl("https://theaiplayground.com/bot/new");
    }
  };
};

export default blocks;
