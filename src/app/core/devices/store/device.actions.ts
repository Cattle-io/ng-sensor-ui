export class AddDevice {
  static readonly type = '[Core/Device] Add Device';
  constructor(public name: string) {}
}

export class EditDevice {
  static readonly type = '[Core/Device] Edit Device';
  constructor(public name: string) {}
}

export class DeleteDevice {
  static readonly type = '[Core/Device] Delete Device';
  constructor(public name: string) {}
}

export class ShowDevice {
  static readonly type = '[Core/Device] Show Device';
  constructor(public name: string) {}
}
