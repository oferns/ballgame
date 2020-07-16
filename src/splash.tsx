import * as elements from 'typed-html';

const template = (
    <div>
        <h1>Hello World!</h1>
    </div>
);

export default class Splash {
    public render(): void {
        document.body.append(template);
    }
}
