import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  questions = [
    {
      type: 'fields',
      title: 'Contact Information',
      isDisableButton: false,
      isShowButton: true,
      inputs: [
        {
          id: 0,
          label: 'Name',
          inputmode: 'text',
          formControlName: 'prenom',
          placeholder: 'Your name',
          rules: [
            {
              type: 'required',
              message: 'Name is required'
            },
            {
              type: 'maxlength',
              message: 'Name cant be longer than 50 characters',
              length: 50
            }
          ]
        },
        {
          id: 1,
          label: 'City/Town',
          inputmode: 'text',
          formControlName: 'nom',
          placeholder: 'Your city/town',
          rules: [
            {
              type: 'required',
              message: 'City/Town is required',
            },
            {
              type: 'maxlength',
              message: 'City/Town cant be longer than 50 characters',
              length: 50
            }
          ]
        },
        {
          id: 2,
          inputmode: 'date',
          label: 'State/Province',
          formControlName: 'dob',
          placeholder: 'Choose your state/province',
          rules: [
            {
              type: 'required',
              message: 'State/Province is required',
            }
          ]
        },
        {
          id: 3,
          label: 'Email Address',
          inputmode: 'text',
          formControlName: 'mail',
          placeholder: 'Tapez votre adresse mail ici',
          rules: [
            {
              type: 'required',
              message: 'Email is required',
            },
            {
              type: 'pattern',
              pattern: '^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$',
              message: 'Please enter a valid email address'
            }
          ]
        },
      ]
    },
    {
      type: 'check-box',
      title: 'Preferred contact method:',
      image: '/assets/image/example.jpeg',
      subtitle: 'Multiple',
      isMultipleAnswer: true,
      isShowButton: true,
      isDisableButton: true,
      nbMinCheck: 1,
      answers: [
        {
          id: 0,
          label: 'Phone call',
          isChecked: false,
        },
        {
          id: 1,
          label: 'Text message',
          isChecked: false,
        },
        {
          id: 2,
          label: 'Email',
          isChecked: false,
        }
      ]
    },
    {
      type: 'mcq',
      title: ' Are you interested in travel insurance for your trip?',
      isDisableButton: false,
      isMultipleAnswer: false,
      answers: [
        {
          id: 0,
          label: 'Yes',
          isSelected: false
        },
        {
          id: 1,
          label: 'No',
          isSelected: false
        },
        {
          id: 2,
          label: 'Unsure',
          isSelected: false
        },
      ]
    },
    {
      type: 'mcq',
      title: ' Are you interested in travel insurance for your trip?',
      isDisableButton: false,
      isMultipleAnswer: false,
      answers: [
        {
          id: 0,
          label: 'Yes',
          isSelected: false
        },
        {
          id: 1,
          label: 'No',
          isSelected: false
        },
        {
          id: 2,
          label: 'Unsure',
          isSelected: false
        },
        {
          id: 3,
          label: 'Does not apply',
          isSelected: false
        },
      ]
    },
    {
      type: 'mcq',
      title: "What goals do you have for your trip?",
      subtitle: 'Multiple answer possible',
      isDisableButton: true,
      isMultipleAnswer: true,
      isShowButton: true,
      answers: [
        {
          id: 0,
          label: 'Rest & relaxation',
          isSelected: false
        },
        {
          id: 1,
          label: 'Adventure & exploring',
          isSelected: false
        },
        {
          id: 2,
          label: 'Quality time with spouse/family/friends',
          isSelected: false
        },
        {
          id: 3,
          label: 'Use a travel guide book',
          isSelected: false
        },
        {
          id: 4,
          label: 'Learn about and experience history & culture',
          isSelected: false
        },
      ]
    },
    {
      type: 'mcq',
      title: "How do you usually organise your travel plan?",
      subtitle: 'Multiple answer possible',
      isDisableButton: true,
      isMultipleAnswer: true,
      isShowButton: true,
      answers: [
        {
          id: 0,
          label: 'Book a tourist guide or travel agencies',
          isSelected: false
        },
        {
          id: 1,
          label: 'Plan your itinerary with help from the internet',
          isSelected: false
        },
        {
          id: 2,
          label: 'Travel spontaneously',
          isSelected: false
        },
        {
          id: 3,
          label: 'Use a travel guide book',
          isSelected: false
        },
      ]
    },
    {
      type: 'mcq',
      title: 'Dans quel environnement travaillez-vous ?',
      isMultipleAnswer: false,
      isShowButton: false,
      answers: [
        {
          id: 0,
          label: 'Sédentaire/bureau',
          isSelected: false
        },
        {
          id: 1,
          label: 'Extérieur',
          isSelected: false
        },
        {
          id: 2,
          label: 'Temps partiel',
          isSelected: false
        },
        {
          id: 3,
          label: 'Voyageur',
          isSelected: false
        },
        {
          id: 4,
          label: 'Travail manuel intense',
          isSelected: false
        },
        {
          id: 5,
          label: 'Autre',
          isSelected: false
        }
      ]
    },
    {
      type: 'mcq-image',
      title: 'How do you usually organise your travel plan?',
      isMultipleAnswer: false,
      isShowButton: false,
      answers: [
        {
          id: 0,
          label: 'Femme',
          image: '/assets/image/example.jpeg',
          isSelected: false
        },
        {
          id: 1,
          label: 'Homme',
          image: '/assets/image/example.jpeg',
          isSelected: false
        },
        {
          id: 2,
          label: 'Autre',
          image: '/assets/image/example.jpeg',
          isSelected: false
        }
      ]
    },
    {
      type: 'mcq-image',
      title: "Dans quel type d'environnement habitez-vous ?",
      subtitle: 'Plusieurs réponses possibles',
      isDisableButton: true,
      isMultipleAnswer: true,
      isShowButton: true,
      answers: [
        {
          id: 0,
          label: 'Ville',
          image: '/assets/image/example.jpeg',
          isSelected: false
        },
        {
          id: 1,
          label: 'Montagne',
          image: '/assets/image/example.jpeg',
          isSelected: false
        },
        {
          id: 2,
          label: 'Bord de mer',
          image: '/assets/image/example.jpeg',
          isSelected: false
        },
        {
          id: 3,
          label: 'Campagne',
          image: '/assets/image/example.jpeg',
          isSelected: false
        }
      ]
    },
  ];

  constructor() { }

}
