import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
currentPage=0;

images=[
  {title: 'At the Beach',
    url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Amazing Water',
    url:'https://images.unsplash.com/photo-1432251407527-504a6b4174a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Beautiful Sunset',
    url:'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Purple Lightning',
    url:'https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  }, 
  {
    title:'Sunset',
    url:'https://images.unsplash.com/photo-1593189470084-67c93499d9bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
  },
  {
    title:'Forest',
    url:'https://images.unsplash.com/photo-1569265213399-13f6ef0614eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Ripples',
    url:'https://images.unsplash.com/photo-1593174022240-2c16d70f21da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Enchanting',
    url:'https://images.unsplash.com/photo-1587587004741-ea9a81b70bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Waterfall',
    url:'https://images.unsplash.com/photo-1593223216236-3b863f5ce56c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Going places',
    url:'https://images.unsplash.com/photo-1593201464932-97d007eb52a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Misty Mountains',
    url:'https://images.unsplash.com/photo-1593201464529-e286c575128c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Dew drops',
    url:'https://images.unsplash.com/photo-1593031320289-9d1ff006be7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Starry Night',
    url:'https://images.unsplash.com/photo-1593024311702-c818cddcbb42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Flight',
    url:'https://images.unsplash.com/photo-1567588417362-8271774e6e2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Leopard',
    url:'https://images.unsplash.com/photo-1503855906671-63f56ad2cd7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Deer',
    url:'https://images.unsplash.com/photo-1496794795115-3247c050b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Serene',
    url:'https://images.unsplash.com/photo-1583883175425-46dee3845e7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Rush Hour?',
    url:'https://images.unsplash.com/photo-1593309377460-1de1c6cb5313?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Long walk',
    url:'https://images.unsplash.com/photo-1593297305022-4511c7b23cde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Ice Cold',
    url:'https://images.unsplash.com/photo-1461083542063-9873020926b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Sunflower',
    url:'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Full Moon',
    url:'https://images.unsplash.com/photo-1592842825197-89dd8efba31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Fire',
    url:'https://images.unsplash.com/photo-1592965158585-5f61306e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Tulips',
    url:'https://images.unsplash.com/photo-1592979931325-600f78090ad5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'White Bird',
    url:'https://images.unsplash.com/photo-1592926002872-c46b05594eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Might Mountains',
    url:'https://images.unsplash.com/photo-1588263574759-f89311fe1e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Strong',
    url:'https://images.unsplash.com/photo-1592805145620-7983a042084d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Lone',
    url:'https://images.unsplash.com/photo-1592471108247-ff8a9ab4b827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Old and Wise',
    url:'https://images.unsplash.com/photo-1592425151316-486e64cf4497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Elephants',
    url:'https://images.unsplash.com/photo-1592750833614-b336fc1d0733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  {
    title:'Mossy',
    url:'https://images.unsplash.com/photo-1592425151162-c242f1128694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  }
 ];

 checkIndex(index : number){
   return Math.abs(this.currentPage - index) < 5
 }


}
