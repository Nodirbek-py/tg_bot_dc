const config = require('./config')
const Telegraf = require('telegraf');
const session = require('telegraf/session');
const Stage = require('telegraf/stage');
const WizardScene = require('telegraf/scenes/wizard');

const superWizard = new WizardScene(
  'super-wizard',
  ctx => {
    ctx.reply(config.greeting);
    setTimeout(() => {
        ctx.reply(config.greeting2)
        setTimeout(() => {
            ctx.reply(config.name)
        }, 2500);
    }, 2500)
    ctx.wizard.state.data = {};
    return ctx.wizard.next();
  },
  ctx => {
    ctx.wizard.state.data.name = ctx.message.text;
    ctx.reply(config.date);
    return ctx.wizard.next();
  },
  ctx => {
    ctx.wizard.state.data.date = ctx.message.text;
    ctx.reply(config.phone);
    return ctx.wizard.next();
  },
  ctx => {
    ctx.wizard.state.data.phone = ctx.message.text;
    
    return ctx.scene.leave();
  }
);
const stage = new Stage([superWizard]);

const bot = new Telegraf(config.token);
bot.use(session());
bot.use(stage.middleware());
bot.command('start', ctx => {
  ctx.scene.enter('super-wizard');
});
bot.launch();