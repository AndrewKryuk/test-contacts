export class ContactEntity {
  id!: number;
  firstName!: string;
  lastName!: string;
  company!: string;
  email!: string;
  address!: string;
  city!: string;
  state!: string;
  zip!: string;
  country!: string;
  title!: string;
  phone!: string;
  contactName!: string;
  status?: 'deleted' | 'saved';

  fromJson(data: JsonObject<ContactEntity>): void {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.company = data.company;
    this.email = data.email;
    this.address = data.address;
    this.city = data.city;
    this.state = data.state;
    this.zip = data.zip;
    this.country = data.country;
    this.title = data.title;
    this.phone = data.phone;
    this.contactName = data.contactName;
    this.status = data.status;
  }

  toJson() {
    return {
      id: this.id,
      // other fields
    };
  }
}
