import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { slideInAnimation } from './core.animations';

@Component({
  selector: 'ui-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class CoreComponent implements OnInit {

  private $user: any = {
    username : 'Jorge Luis Mayorga',
    status: 'Online',
    profile: {
      src: 'https://scontent.fbog4-1.fna.fbcdn.net/v/t31.0-1/p160x160/19222621_10155338333337432_1514315452106175860_o.jpg?_nc_cat=101&_nc_oc=AQlhOer8UL2vYsCer-EV-PP9SF1xw-gNEm4YAPOMC6BIgjVS24TLuGCcf8iC02dmI7k&_nc_ht=scontent.fbog4-1.fna&oh=b81994cf21a8796ddace9dffa52c2baa&oe=5EAD16B3'
    }
  };
/*
  private $sidebarLinks: any[] = [

    { text: 'List of Devices', link : '/core/devices/' },
    { text: 'Show Device', link : '/core/devices/asdfasdfa' },
    { text: 'Add Devices', link : '/core/devices/add' },
    { text: 'Edit Devices', link : '/core/devices/edit/03000dfsdf' },
    { text: 'Delete Devices', link : '/core/devices/delete/asdfasdfa4'},

    { text: 'List of Notifications', link : '/core/notifications/' },
    { text: 'Show Notifications', link : '/core/notifications/asdfasdfa' },
    { text: 'Add Notifications', link : '/core/notifications/add' },
    { text: 'Edit Notifications', link : '/core/notifications/edit/03000dfsdf' },
    { text: 'Delete Notifications', link : '/core/notifications/delete/asdfasdfa4'},

    { text: 'List of Project', link : '/core/projects/' },
    { text: 'Show Project', link : '/core/projects/asdfasdfa' },
    { text: 'Add Project', link : '/core/projects/add' },
    { text: 'Edit Project', link : '/core/projects/edit/03000dfsdf' },
    { text: 'Delete Project', link : '/core/projects/delete/asdfasdfa4'},

    { text: 'List of Dashboards', link : '/core/dashboards/' },
    { text: 'Show Dashboard', link : '/core/dashboards/asdfasdfa' },
    { text: 'Add Dashboard', link : '/core/dashboards/add' },
    { text: 'Edit Dashboard', link : '/core/dashboards/edit/03000dfsdf' },
    { text: 'Delete Dashboard', link : '/core/dashboards/delete/asdfasdfa4'},

    { text: 'List of Users', link : '/core/users/' },
    { text: 'Show Users', link : '/core/users/asdfasdfa' },
    { text: 'Add Users', link : '/core/users/add' },
    { text: 'Edit Users', link : '/core/users/edit/03000dfsdf' },
    { text: 'Delete Users', link : '/core/users/delete/asdfasdfa4'},


    { text: 'List of LogSessions', link : '/core/log-sesions/' },
    { text: 'Show LogSessions', link : '/core/log-sesions/asdfasdfa' },
    { text: 'Add LogSessions', link : '/core/log-sesions/add' },
    { text: 'Edit LogSessions', link : '/core/log-sesions/edit/03000dfsdf' },
    { text: 'Delete LogSessions', link : '/core/log-sesions/delete/asdfasdfa4'},

  ]

  */
 private $sidebarLinks: any[] = [
  { text: 'Projects', link : '/core/projects/', icon: 'work' },
  { text: 'Dashboards', link : '/core/dashboards/', icon: 'dashboard' },
  { text: 'LogSessions', link : '/core/log-sessions/', icon: 'today' },
  { text: 'Devices', link : '/core/devices/' , icon: 'settings_remote'},
  { text: 'Users', link : '/core/users/' , icon: 'person'},
  { text: 'Notifications', link : '/core/notifications/' , icon: 'message'},
  { text: 'Settings', link : '/core/settings/' , icon: 'settings_application'},
 ]

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
