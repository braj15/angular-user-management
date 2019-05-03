export class User {

  constructor(
    public userId: string = '',
    public name = { fname: '',
                    lname: ''},
    public sex = '',
    public email: string = ''
  ){}
}