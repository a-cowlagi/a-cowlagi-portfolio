import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
const openPDF = () => {
    const pdfWindow = window.open("_blank");
    const title = "My Resume!";
    const URI = process.env.PUBLIC_URL + "/Resume.pdf";
    const html = `
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body style="margin:0">
          <embed width="100%" height="100%" src=${URI} type="application/pdf">
        </body>
      </html>
    `;

    pdfWindow.document.write(html);
    pdfWindow.document.close();
    pdfWindow.history.pushState(null, null, URI);
};



const ButtonAnimated = () => (
    <div>
        <Button.Group>
            <div className="resume">
                <Button animated='fade' onClick={openPDF} onMouseDown={e => e.preventDefault()}>
                    <Button.Content visible>Download Resume</Button.Content>
                    <Button.Content hidden>
                        <Icon name='download' />
                    </Button.Content>
                </Button>
            </div>
            <a href="https://www.linkedin.com/in/anirudh-cowlagi">
                <Button color='linkedin'>
                    <Icon name='linkedin' /> LinkedIn
                </Button>
            </a>

            <a href="https://github.com/a-cowlagi">
                <Button color='instagram'>
                    <Icon name='github' /> GitHub
                </Button>
            </a>
        </Button.Group>

    </div>
)

export default ButtonAnimated