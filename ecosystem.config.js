module.exports = {
  apps : [{
    name: 'lk.ricam',
    script: './app.js',

    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    restart_delay: 3000,
    log_file: 'logs/general.log',
    log_date_format: 'YYYY-MM-DD HH:mm',
    env: {
      "NODE_ENV": "production"
    },
    env_dev: {
      "NODE_ENV": 'dev'
    }
  }]
};
