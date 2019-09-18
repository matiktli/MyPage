export class Commit {
    data: Map<string, any> = new Map;
    type: VscType;
}

export enum VscType {
    GITHUB,
    GITLAB,
    BITBUCKET,
}