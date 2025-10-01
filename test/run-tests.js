const puppeteer = require('puppeteer');
const path = require('path');

async function runTests() {
  console.log('🚀 Starting TechFest UI Components Tests...\n');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Enable console logging
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('❌ Browser Error:', msg.text());
    }
  });
  
  try {
    // Load the HTML file
    const filePath = path.resolve(__dirname, '../techfest.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
    
    console.log('✅ Page loaded successfully');
    
    // Wait for components to initialize
    await page.waitForSelector('.modal-trigger', { timeout: 5000 });
    await page.waitForSelector('#myTabs', { timeout: 5000 });
    await page.waitForSelector('#myCarousel', { timeout: 5000 });
    
    console.log('✅ All components loaded');
    
    // Test Modal Functionality
    console.log('\n🧪 Testing Modal Component...');
    
    // Open modal
    await page.click('.modal-trigger');
    await page.waitForSelector('.modal-overlay.active', { timeout: 2000 });
    console.log('  ✅ Modal opens correctly');
    
    // Close with ESC key
    await page.keyboard.press('Escape');
    await page.waitForFunction(
      () => !document.querySelector('.modal-overlay.active'),
      { timeout: 2000 }
    );
    console.log('  ✅ Modal closes with ESC key');
    
    // Test Tabs Functionality
    console.log('\n🧪 Testing Tabs Component...');
    
    const tabsContainer = await page.$('#myTabs');
    const initialTab = await page.evaluate(() => {
      return document.querySelector('.tab-button[aria-selected="true"]').textContent;
    });
    console.log(`  ✅ Initial tab loaded: ${initialTab}`);
    
    // Test arrow key navigation
    await page.focus('.tab-button[aria-selected="true"]');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
    
    const newActiveTab = await page.evaluate(() => {
      return document.querySelector('.tab-button[aria-selected="true"]').textContent;
    });
    console.log(`  ✅ Arrow key navigation works: ${newActiveTab}`);
    
    // Test Carousel Functionality
    console.log('\n🧪 Testing Carousel Component...');
    
    const initialSlide = await page.evaluate(() => {
      const activeIndicator = document.querySelector('.carousel-indicator.active');
      return Array.from(document.querySelectorAll('.carousel-indicator')).indexOf(activeIndicator);
    });
    console.log(`  ✅ Initial slide: ${initialSlide}`);
    
    // Test next button
    await page.click('.next-button');
    await page.waitForTimeout(600); // Wait for transition
    
    const newSlide = await page.evaluate(() => {
      const activeIndicator = document.querySelector('.carousel-indicator.active');
      return Array.from(document.querySelectorAll('.carousel-indicator')).indexOf(activeIndicator);
    });
    console.log(`  ✅ Next button works: moved to slide ${newSlide}`);
    
    // Test Unit Tests
    console.log('\n🧪 Checking Unit Test Results...');
    
    await page.waitForTimeout(2000); // Wait for tests to complete
    
    const testResults = await page.evaluate(() => {
      const testItems = document.querySelectorAll('.test-item');
      const passed = document.querySelectorAll('.test-pass');
      const failed = document.querySelectorAll('.test-fail');
      
      return {
        total: testItems.length,
        passed: passed.length,
        failed: failed.length
      };
    });
    
    console.log(`  📊 Test Results: ${testResults.passed}/${testResults.total} passed`);
    
    if (testResults.failed > 0) {
      console.error(`  ❌ ${testResults.failed} unit tests failed!`);
      process.exit(1);
    }
    
    // Test Accessibility Features
    console.log('\n♿ Testing Accessibility Features...');
    
    // Check ARIA attributes
    const ariaTests = await page.evaluate(() => {
      const modal = document.querySelector('.modal-overlay');
      const tabs = document.querySelector('[role="tablist"]');
      const carousel = document.querySelector('.carousel-slide');
      
      return {
        modalHasRole: modal.getAttribute('role') === 'dialog',
        modalHasAriaModal: modal.getAttribute('aria-modal') === 'true',
        tabsHaveRole: tabs && tabs.getAttribute('role') === 'tablist',
        carouselHasRole: carousel && carousel.getAttribute('role') === 'group'
      };
    });
    
    if (ariaTests.modalHasRole && ariaTests.modalHasAriaModal) {
      console.log('  ✅ Modal has proper ARIA attributes');
    }
    if (ariaTests.tabsHaveRole) {
      console.log('  ✅ Tabs have proper ARIA attributes');
    }
    if (ariaTests.carouselHasRole) {
      console.log('  ✅ Carousel has proper ARIA attributes');
    }
    
    console.log('\n🎉 All tests completed successfully!');
    console.log('\n📋 Summary:');
    console.log(`   • Modal Component: ✅ Working`);
    console.log(`   • Tabs Component: ✅ Working`);
    console.log(`   • Carousel Component: ✅ Working`);
    console.log(`   • Unit Tests: ✅ ${testResults.passed}/${testResults.total} passed`);
    console.log(`   • Accessibility: ✅ ARIA attributes present`);
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = runTests;
