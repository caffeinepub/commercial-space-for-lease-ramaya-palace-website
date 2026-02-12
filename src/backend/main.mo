import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type ContactForm = {
    name : Text;
    phone : Text;
    businessType : Text;
    requiredArea : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactForm {
    public func toText(form : ContactForm) : Text {
      "Name: " # form.name # "\n" #
      "Phone: " # form.phone # "\n" #
      "Business Type: " # form.businessType # "\n" #
      "Required Area: " # form.requiredArea # "\n" #
      "Message: " # form.message # "\n";
    };
  };

  let contactForms = Map.empty<Time.Time, ContactForm>();

  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, businessType : Text, requiredArea : Text, message : Text) : async Text {
    if (name.isEmpty() or phone.isEmpty()) {
      Runtime.trap("Name and phone are required");
    };

    let timestamp = Time.now();
    let form : ContactForm = {
      name;
      phone;
      businessType;
      requiredArea;
      message;
      timestamp;
    };
    contactForms.add(timestamp, form);
    "Thank you for your enquiry, " # name # ". We will respond within 24 hours.";
  };

  public query ({ caller }) func getContactFormCount() : async Nat {
    contactForms.size();
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.values().toArray();
  };

  public query ({ caller }) func getAllContactFormTexts() : async [Text] {
    contactForms.values().toArray().map(func(form) { ContactForm.toText(form) });
  };
};
