<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/DarmorGamz/Youtube-Metadata-Analysis">
    <img src="images/logo.png" alt="Logo" width="125" height="125">
  </a>
<h3 align="center">Youtube Metadata Analyser</h3>

  <p align="center">
    This project is designed to analyze top videos from specific YouTube channels and extract insights about what makes these videos successful based on their metadata such as tags, keywords, and descriptions.
    <br />
    <br />
    <a href="https://github.com/DarmorGamz/Youtube-Metadata-Analysis">View Demo</a>
    ·
    <a href="https://github.com/DarmorGamz/Youtube-Metadata-Analysis/issues">Report Bug</a>
    ·
    <a href="https://github.com/DarmorGamz/Youtube-Metadata-Analysis/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started
### Prerequisites
Assumed you have NPM, Node.js and Python3 installed on your machine 
#### AWS Amplify CLI
```
npm install -g @aws-amplify/cli
amplify configure
SignIn to AWS
Create IAM user (ex. Amplify-Dev)
Attach policies directly (AdministratorAccess-Amplify) *Note this isn't the safest option, but is the quickest option
Security credentials->Create acces key->CLI
Copy accessKeyId, and secretAccessKey into terminal
```
####  Create React App
```
npx create-react-app {Your App Directory Name}
cd {Your App Directory Name}
npm start
```
####  Initialize AWS Amplify
```
amplify init
npm install aws-amplify @aws-amplify/ui-react
amplify add hosting
amplify publish
```
####  Add AWS Amplify Api
```
amplify add api
```
####  Add AWS Amplify Auth
```
amplify add auth
```
####  Add EsLint
```
npm init @eslint/config
```
####  NextUI
```
npm i @nextui-org/react
```

Before running the scripts, you need to set up your environment and install necessary dependencies.

### Prerequisites
The codebase is written in Python 3. If you don't have Python installed, download and install it from python.org.
### Install Dependencies
Navigate to the project directory and install the necessary Python packages using pip:
```python
cd Youtube-Metadata-Analysis
pip install -r requirements.txt
```
### Obtain YouTube Data API v3 key
To access the YouTube Data API, you will need to obtain an API key from the Google Developer Console.
1. Visit the Google Developer Console.
2. Create a new project.
3. Enable YouTube Data API v3 for that project.
4. Generate an API key.

Once you have the API key, store it in a safe place and do not share it with anyone. You will need to include this key in your application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the GPL License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p


<!-- CONTACT -->
## Contact

Darren Morrison - darren09@live.ca 

Project Link: [https://github.com/DarmorGamz/Youtube-Metadata-Analysis](https://github.com/DarmorGamz/Youtube-Metadata-Analysis)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
Myself ;)
<p align="right">(<a href="#readme-top">back to top</a>)</p>


 
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/DarmorGamz/Youtube-Metadata-Analysis.svg?style=for-the-badge
[contributors-url]: https://github.com/DarmorGamz/Youtube-Metadata-Analysis/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/DarmorGamz/Youtube-Metadata-Analysis.svg?style=for-the-badge
[forks-url]: https://github.com/DarmorGamz/Youtube-Metadata-Analysis/network/members
[stars-shield]: https://img.shields.io/github/stars/DarmorGamz/Youtube-Metadata-Analysis.svg?style=for-the-badge
[stars-url]: https://github.com/DarmorGamz/Youtube-Metadata-Analysis/stargazers
[issues-shield]: https://img.shields.io/github/issues/DarmorGamz/Youtube-Metadata-Analysis.svg?style=for-the-badge
[issues-url]: https://github.com/DarmorGamz/Youtube-Metadata-Analysis/issues
[license-shield]: https://img.shields.io/github/license/DarmorGamz/Youtube-Metadata-Analysis.svg?style=for-the-badge
[license-url]: https://github.com/DarmorGamz/Youtube-Metadata-Analysis/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/darren--morrison
[product-screenshot]: images/screenshot.png

[C.com]: https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white
[C-url]: https://www.cprogramming.com
[PHP.com]: https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white
[PHP-url]: https://www.php.net/
[MYSQL.com]: https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white
[MYSQL-url]: https://www.mysql.com/
[HTML.com]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://www.w3.org/html/#:~:text=W3C%20HTML&text=https%3A%2F%2Fhtml.spec.whatwg,is%20the%20current%20HTML%20standard.
[CSS3.com]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://www.css3.com/
[JavaScript.com]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://www.javascript.com/


[Linux.com]: https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black
[Linux-url]: https://aws.amazon.com/amazon-linux-2/


[AWS.com]: https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white
[AWS-url]: https://aws.amazon.com/

[PHPStorm.com]: https://img.shields.io/badge/phpstorm-143?style=for-the-badge&logo=phpstorm&logoColor=black&color=black&labelColor=darkorchid
[PHPStorm-url]: https://www.jetbrains.com/phpstorm/
