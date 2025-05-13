const scripts = document.querySelectorAll("script.nocache");
const styles = document.querySelectorAll("link[rel='stylesheet'].nocache");

const antiCache = "?t=" + new Date().getTime();

scripts.forEach(script => script.src += antiCache);
styles.forEach(style => style.href += antiCache);