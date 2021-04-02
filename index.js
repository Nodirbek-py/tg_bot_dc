const config = require("./config");
const Telegraf = require("telegraf");
const session = require("telegraf/session");
const Stage = require("telegraf/stage");
const WizardScene = require("telegraf/scenes/wizard");
const { Router, Markup, Composer } = Telegraf;
let data = {};
const courseSelector = new Composer();



courseSelector.action("front", (ctx) => {
  ctx.answerCbQuery();
  ctx.wizard.state.data.course = "Web - Front";
  return ctx.wizard.next();
});
courseSelector.action("back", (ctx) => {
  ctx.answerCbQuery();
  ctx.wizard.state.data.course = "Web - Back";
  return ctx.wizard.next();
});
courseSelector.action("py", (ctx) => {
  ctx.answerCbQuery();
  ctx.wizard.state.data.course = "Python";
  return ctx.wizard.next();
});
courseSelector.action("android", (ctx) => {
  ctx.answerCbQuery();
  ctx.wizard.state.data.course = "Mobil - Android";
  return ctx.wizard.next();
});
courseSelector.action("ios", (ctx) => {
  ctx.answerCbQuery();
  ctx.wizard.state.data.course = "Mobil - iOS";
  return ctx.wizard.next();
});
courseSelector.action("3d", (ctx) => {
  ctx.answerCbQuery();
  ctx.wizard.state.data.course = "Dizayn - 3D";
  return ctx.wizard.next();
});
courseSelector.action("graphic", (ctx) => {
  ctx.answerCbQuery();
  ctx.wizard.state.data.course = "Dizayn - grafik";
  return ctx.wizard.next();
});
courseSelector.action("robot", (ctx) => {
  ctx.answerCbQuery();
  ctx.wizard.state.data.course = "Robototexnka";
  return ctx.wizard.next();
});



const superWizard = new WizardScene(
  "super-wizard",
  (ctx) => {
    ctx.reply(config.greeting);
    setTimeout(() => {
      ctx.reply(config.greeting2);
      setTimeout(() => {
        ctx.reply(config.name);
      }, 2500);
    }, 2500);
    ctx.wizard.state.data = {};
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.wizard.state.data.name = ctx.message.text;
    ctx.reply(config.date);
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.wizard.state.data.date = ctx.message.text;
    ctx.reply(config.phone);
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.wizard.state.data.phone = ctx.message.text;
    ctx.reply(config.addr);
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.wizard.state.data.addr = ctx.message.text;
    ctx.reply(config.comp, {
      reply_markup: {
        keyboard: [["Ha", "Yo'q"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.wizard.state.data.comp = ctx.message.text;
    ctx.reply(config.lang, {
      reply_markup: {
        keyboard: [["Rus tili", "Ingliz tili", "Ikkalasi ham"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.wizard.state.data.lang = ctx.message.text;
    ctx.reply(config.lang, {
      reply_markup: {
        keyboard: [["1", "2", "3", "4", "5"]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
    return ctx.wizard.next();
  },
  (ctx) => {
    ctx.wizard.state.data.level = ctx.message.text;
    ctx.reply(
    `
    𝗞𝘂𝗿𝘀𝗹𝗮𝗿 𝘁𝗼'𝗴'𝗿𝗶𝘀𝗶𝗱𝗮 𝗺𝗮'𝗹𝘂𝗺𝗼𝘁
    👇👇👇👇👇👇👇👇👇👇👇👇👇👇

    🌐 𝗪𝗲𝗯 𝗗𝗮𝘀𝘁𝘂𝗿𝗹𝗮𝘀𝗵 (𝗙𝗿𝗼𝗻𝘁-𝗲𝗻𝗱):
          ⏲️ Davomiyligi - 4 oy
          📖 Texnologiyalar - HTML, CSS, JS, ReactJS, Ajax
    
    🌐 𝗪𝗲𝗯 𝗗𝗮𝘀𝘁𝘂𝗿𝗹𝗮𝘀𝗵 (𝗕𝗮𝗰𝗸-𝗲𝗻𝗱):
          ⏲️ Davomiyligi - 6 oy
          📖 Texnologiyalar - PHP, Java, Django, MYSQL, Postgres
    
    👨🏽‍💻 𝗣𝘆𝘁𝗵𝗼𝗻:
          ⏲️ Davomiyligi - 5 oy
          📖 Texnologiyalar - Python foundation

    📱 𝗠𝗼𝗯𝗶𝗹 𝗗𝗮𝘀𝘁𝘂𝗿𝗹𝗮𝘀𝗵 (𝗔𝗻𝗱𝗿𝗼𝗶𝗱):
          ⏲️ Davomiyligi - 10 oy
          📖 Texnologiyalar - Kotlin, Java, C++ OOP, XML, REST API, GIT, DB

    📱 𝗠𝗼𝗯𝗶𝗹 𝗗𝗮𝘀𝘁𝘂𝗿𝗹𝗮𝘀𝗵 (𝗶𝗢𝗦):
          ⏲️ Davomiyligi - 10 oy
          📖 Texnologiyalar - Swift, C++ OOP, XML, REST API, GIT, Swift UI, DB

    🤖 𝗥𝗼𝗯𝗼𝘁𝗼𝘁𝗲𝘅𝗻𝗶𝗸𝗮:
          ⏲️ Davomiyligi - 6 oy
          📖 Texnologiyalar - Arduino, Sxema texnika, C++
    
    🏛️ 𝟯𝗗 𝗱𝗶𝘇𝗮𝘆𝗻:
          ⏲️ Davomiyligi - 5 oy
          📖 Texnologiyalar - AutoCAD, 3Ds MAX, Lumion
    
    🖌️ Grafik dizayn:
          ⏲️ Davomiyligi - 7 oy
          📖 Texnologiyalar - Adobe Illustrator, Adobe XD, Adobe Photoshop, Figma
    `,
      Markup.inlineKeyboard([
        [
          Markup.callbackButton("🌐 Web (Front-end)", "front"),
          Markup.callbackButton("🌐 Web (Back-end)", "back"),
          
        ],
        [Markup.callbackButton("👨🏽‍💻 Python", "py"),],
        [
          Markup.callbackButton("📱 Mobil (Android)", "android"),
          Markup.callbackButton("📱 Mobil (iOS)", "ios"),
        ],
        [
          Markup.callbackButton("🤖 Robototexnika", "robot")
        ],
        [
          Markup.callbackButton("🏛️ 3D dizayn", "3d"),
          Markup.callbackButton("🖌️ Grafik dizayn", "graphic"),
        ],
      ]).extra()
    );
    return ctx.wizard.next();
  },
  courseSelector,
  (ctx) => {
    console.log(ctx.wizard.state.data);
    return ctx.scene.leave();
  }
);
const stage = new Stage([superWizard]);
const bot = new Telegraf(config.token);
bot.use(session());
bot.use(stage.middleware());
bot.command("start", (ctx) => {
  ctx.scene.enter("super-wizard");
});
bot.launch();