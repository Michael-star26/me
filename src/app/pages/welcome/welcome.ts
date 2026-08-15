import { ActuarialTab } from './tabs/actuarial-tab/actuarial-tab';
import { BlogTab } from './tabs/blog-tab/blog-tab';
import { ContactTab } from './tabs/contact-tab/contact-tab';
import { CvTab } from './tabs/cv-tab/cv-tab';
import { ResearchTab } from './tabs/research-tab/research-tab';
import { SocialsTab } from './tabs/socials-tab/socials-tab';
import { SoftwareDev } from './tabs/software-dev/software-dev';

import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NzTabsModule, NzTabPosition } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { filter } from 'rxjs/operators';

type Lang = 'en' | 'ko' | 'zh-CN';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NzTabsModule,
    NzButtonModule,
    ActuarialTab,
    SoftwareDev,
    CvTab,
    ContactTab,
    ResearchTab,
    SocialsTab,
    BlogTab
  ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);

  // Tab path mapping matching the index position of <nz-tab> elements
  tabPaths: string[] = ['software', 'actuarial', 'research', 'blog', 'cv', 'contact', 'socials'];

  selectedTabIndex = signal<number>(0);
  currentLang = signal<Lang>('en');
  tabPosition = signal<NzTabPosition>('left');

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initGoogleTranslate();

      // Sync tab selection on initial load
      this.syncTabWithUrl(this.router.url);

      // Listen to navigation events to keep tab index in sync on route changes
      this.router.events
        .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.syncTabWithUrl(event.urlAfterRedirects);
        });

      this.breakpointObserver
        .observe(['(max-width: 768px)'])
        .subscribe((result) => {
          this.tabPosition.set(result.matches ? 'top' : 'left');
        });
    }
  }

  onTabChange(index: number): void {
    this.selectedTabIndex.set(index);
    const targetPath = this.tabPaths[index];
    this.router.navigate(['/welcome', targetPath]);
  }

  private syncTabWithUrl(url: string): void {
    const segments = url.split('/');
    const currentTab = segments[2]; // Extracts 'actuarial' from '/welcome/actuarial'
    if (currentTab) {
      const index = this.tabPaths.indexOf(currentTab);
      if (index !== -1) {
        this.selectedTabIndex.set(index);
      }
    }
  }

  private initGoogleTranslate(): void {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ko,zh-CN',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }

  setLang(lang: Lang): void {
    this.currentLang.set(lang);

    if (isPlatformBrowser(this.platformId)) {
      const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectEl) {
        selectEl.value = lang === 'en' ? '' : lang;
        selectEl.dispatchEvent(new Event('change'));
      }
    }
  }
}
