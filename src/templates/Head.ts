export const HeadTemplate = `
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Carlisle Email</title>
<style>
  @import url("http://fonts.cdnfonts.com/css/gotham?styles=17581,17585");
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  section * {
    font-family: "Gotham", sans-serif;
    line-height: 150%;
    font-weight: 400;
    letter-spacing: 0.2px;
  }

  .forgot-password-content {
    min-height: 48.625rem;
  }

  .reset-password-content {
    min-height: 53.625rem;
  }

  .content {
    background-color: #f8fafc;
    -webkit-font-smoothing: antialiased;
    overflow: auto;
  }

  .card {
    background-color: #ffffff;
    max-width: 36rem;
    min-height: 41.125rem;
    margin: 2rem auto;
    padding: 2.5rem 2rem;
  }

  .logo {
    text-align: center;
    margin-bottom: 2.75rem;
  }

  .keep-it-safe {
    font-weight: 700;
  }

  .txt-primary {
    font-size: 1rem;
    color: #242254;
  }

  .divider {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: 0.063rem;
    background-color: #e2e8f0;
  }

  .reset-password-divider {
    margin-bottom: 1rem;
  }

  .txt-secondary {
    font-size: 1rem;
    color: #384860;
  }

  .txt-secondary > span {
    color: #0051a4;
  }

  .width-partial {
    width: 99%;
  }

  .margin-bottom-md {
    margin-bottom: 2rem;
  }

  .btn-submit {
    display: block;
    padding: 0.938rem 10.5rem;
    text-align: center;
    width: 100%;
    background: #272425;
    border-radius: 15px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    line-height: 29px;
    color: #fff !important;
    text-transform: capitalize;
  }

  table {
    border-collapse: separate;
    border-spacing: 0 1rem;
    margin-bottom: 1rem;
  }

  .table-value {
    font-size: 1rem;
    font-weight: bold;
  }

  .footer {
    max-width: 36rem;
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 24px;
    color: #242254;
  }
</style>
</head>
`;
