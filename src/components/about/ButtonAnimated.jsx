import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonAnimated = () => (
    <div>
        <Button.Group>
            
            <a href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noopener noreferrer">
                <Button animated='fade'>
                    <Button.Content visible>Download Resume</Button.Content>
                    <Button.Content hidden>
                        <Icon name='download' />
                    </Button.Content>
                </Button>
            </a>
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