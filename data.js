// Shared Data Structure for Cybersecurity Wargames
window.scenariosData = [
    {
        id: 'SCEN001',
        description: 'An employee has handed you a USB stick they found in the car park.',
        suggestion: 'This could be a "baiting" attack, where an attacker leaves a malware-infected USB drive somewhere for an employee to find.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: The user plugs the drive into a company device, loading ransomware which spreads across the network. A company-wide ransomware infection encrypts all data, causing total operational shutdown and financial losses rising with every hour of downtime.',
        playbook: 'DO NOT PLUG THE DRIVE INTO A REGULAR COMPANY DEVICE.\n1. Isolate an expendable device from the network.\n2. Plug the drive into the isolated device and analyse its contents and activity.\nIf you see anything suspicious...\n4. Document and report your findings.\n5. Consider disabling external media permissions on company devices either temporarily or permanently.\n6. Draft company-wide communications to address the immediate risk. \n7. Assess the efficacy of your current employee training.'
    },
    {
        id: 'SCEN002',
        description: 'An internal web application is reporting dozens of failed login attempts from various IP addresses.',
        suggestion: 'This strongly suggests a brute-force or credential stuffing attack is underway, where an attacker is systematically trying to guess passwords for user accounts.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: An attacker gains access to an account, uses this as a foot-in-the-door to escalate their permissions and gain control of a privileged account, leading to a major data breach and/or damage to operational systems.',
        playbook: '1. Check if any of the login attempts were successful.\nIf NO, jump to step 4. If YES, continue...\n2.Disable any compromised accounts, sign out all sessions, and force a password reset.\n3. Monitor the password resets to ensure they are completed by the employees and not the attacker.\n4. Assess if it is feasible for you to block the malicious IP addresses.\n5. Block what you can. Tighten policies and settings specific to the targeted app.\n6. Continue to monitor relevant logs whilst documenting and reporting your findings.'
    },
    {
        id: 'SCEN003',
        description: 'Network logs are showing significant and sustained increase in bandwidth consumption from a single internal IP during off-peak hours.',
        suggestion: 'This could suggest unauthorized data exfiltration, where a compromised machine or an insider threat is transferring large amounts of data out of the network during off-hours to avoid detection.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: The organisation\'s intellectual property and senstivie data are stolen and either sold or leaked on the dark web. Depending on the nature of your organisation, the damages could be financial, reputational, existential, or put your colleagues and members of the public in danger.',
        playbook: '1. Identify the device associated with the internal IP address.\n2. Isolate the device from the network immediately to halt the transfer.\n3. Begin forensic analysis of the compromised device to determine if this is an internal or external threat.\n4. Analyse the network traffic to learn more about the malicious actor.\n5. Document and report your findings.'
    },
    {
        id: 'SCEN004',
        description: 'Your XDR is reporting an unknown device appearing in network scans, attempting to communicate with external IPs.',
        suggestion: 'This suggests that an unauthorized device (employee or attacker-owned) has been connected to the internal network and is attempting to communicate via the public internet.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: An attacker device, or infected personal device, establishes a persistent foothold on the internal network, connected to an external C2 server, to launch further attacks.',
        playbook: '1. Block the unauthorised device\'s network access if possible. Otherwise block the external IPs the device is attempting to communicate with.\n2. Determine the device\'s physical connection point (port or AP location).\n3. Recover the unauthorized device.\n4. If the device is suspicious, conduct a physical security sweep to check for further devices.\n5. Document and report your findings.\n6. Review network security to prevent future occurrences.'
    },
    {
        id: 'SCEN005',
        description: 'Network logs are showing unusual traffic spikes at irregular intervals from multiple devices within your network.',
        suggestion: 'This suggests potential malware beaconing or intermittent command and control (C2) communication from multiple compromised devices across the network.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: A widespread, low-and-slow malware infection is preparing for a coordinated attack like ransomware deployment.',
        playbook: '1. Run endpoint scans on the affected devices to search for malware.\nIf a malware signature is discovered...\n2. Broaden the scan to the rest of the network and begin steps to remove the infection.\nIf no malware is detected...\n2. Isolate one of the devices for deeper forensic analysis.\n3. Review firewall and network logs to gather information on the outbound communication.\n4. Document and report your findings.'
    },
    {
        id: 'SCEN006',
        description: 'Network logs are showing traffic on port 4444 from multiple internal devices.',
        suggestion: 'This strongly suggests active Metasploit activity on the network, as port 4444 is its default listener port for establishing reverse shells from compromised machines.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: An attacker has active remote control over multiple internal devices and is preparing to escalate privileges.',
        playbook: '1. Immediately block all outbound traffic on port 4444.\n2. Identify all internal devices sending traffic on this port.\n3. Isolate the identified devices from the network.\n4. Scan the network for other signs of compromise.\n5. Analyse compromised devices and network logs to determine the intial attack vector.'
    },
    {
        id: 'SCEN007',
        description: 'Multiple users are reporting their company laptops have run out of storage.',
        suggestion: 'This might indicate malware designed to fill disk space as a denial-of-service attack, such as a fork bomb, or it could be a bug in legitimate software.',
        risk: 'Risk: <span style="color: #FFDC00;">Medium</span>.\nWorst-case scenario: A worm is spreading across the network, causing widespread system crashes.',
        playbook: '1. Isolate an affected laptop from the network for analysis.\n2. Use disk analysis tools to identify what is consuming the space.\n3. Whatever the cause, block the offending malware or application version.\n4. If the cause is malware, update antivirus signatures. If the cause is software, check online sources for a known fix.'
    },
    {
        id: 'SCEN008',
        description: 'An unknown process is running on a server, consuming unusually high CPU.',
        suggestion: 'This is a classic indicator of cryptomining malware (cryptojacking), but it could just be a software bug.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The server is now part of a botnet, under the control of a cybercriminal.',
        playbook: '1. Identify the unknown process by name and hash.\n2. Check the process hash against threat intelligence feeds like VirusTotal.\n3. If possible, deprovision the server and spin up a new server with different access credentials, making sure to preserve logs. If not, terminate the malicious process and rotate access keys.\n4. Check access logs for suspicious activity.'
    },
    {
        id: 'SCEN009',
        description: 'Your XDR is reporting modifications to critical system files on a server.',
        suggestion: 'This is a strong indicator of compromise, possibly from malware, a rootkit, or an attacker attempting to establish persistence and hide their tracks.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: A rootkit has been installed, giving an attacker persistent, hidden administrative access to the server.',
        playbook: '1. Isolate the server from the network.\n2. Use a file integrity monitoring (FIM) tool to identify exactly which files were changed.\n3. Take a forensic snapshot of the server\'s disk and memory.\n4. Rebuild the server from a known-good backup or image.\n5. Investigate the initial access vector to prevent recurrence.'
    },
    {
        id: 'SCEN010',
        description: 'An unrecognised application on a user\'s laptop is generating a high number of outbound connections to various external IP addresses.',
        suggestion: 'The laptop is likely infected with malware and is part of a botnet, or is acting as a spam relay, or being used for crypto-mining.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The company\'s IP address is blacklisted for malicious activity, disrupting email and other services.',
        playbook: '1. Isolate the user\'s laptop from the network.\n2. Block the identified external IP addresses at the network perimeter.\n3. Run a full malware scan on the device.\n4. Analyze the application to understand its purpose and origin.\n5. Re-image the laptop and reset the user\'s credentials.'
    },
    {
        id: 'SCEN011',
        description: 'Your SIEM is reporting a new administrative account created for an application. You cannot find any record of a request or approval for this new account.',
        suggestion: 'This could mean an attacker has gained sufficient privileges to create a new admin account for persistent, and potentially unnoticed, access to the application. However, it could also be an insider threat preparing for to access restricted data. Or it could just be an insider not following proper procedure and therefore undermining your security posture.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: An attacker uses the new admin account to exfiltrate all data from the application and destroy the originals.',
        playbook: '1. Disable the unauthorized administrative account immediately.\n2. Force a password reset for all other privileged accounts on the application.\n3. Review application logs to follow the footprints back to their source.\n4. Patch any underlying vulnerabilities.'
    },
    {
        id: 'SCEN012',
        description: 'Network logs show multiple devices are making outbound connections to a known malicious IP address.',
        suggestion: 'One or more devices on the network are compromised and are communicating with a known command and control (C2) server, indicating active malware infection.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: The devices are actively being controlled by an attacker for data theft, ransomware deployment, or lateral movement.',
        playbook: '1. Block the malicious IP address at the network perimeter.\n2. Use network logs to identify all internal devices that connected to the IP.\n3. Isolate all identified devices from the network.\n4. Initiate incident response procedures for compromised endpoints.\n5. Scan the network for other devices exhibiting similar behavior.'
    },
    {
        id: 'SCEN013',
        description: 'Your SIEM has detected several failed login attempts to multiple user accounts within a short period.',
        suggestion: 'This is likely a password spray attack, where an attacker uses a single common password (like \'Password123\') against many different usernames, bypassing normal brute-force detection.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The attacker successfully compromises one or more accounts, gaining an initial foothold in the environment.',
        playbook: '1. Identify and block the source IP(s) of the attack.\n2. Review logs to see if any attempts were successful.\n3. If an account was compromised, disable it and reset the password.\n4. Review authentication policies.'
    },
    {
        id: 'SCEN014',
        description: 'Network monitoring tools have detected HTTP requests with uncommon header types from an internal server to an external IP address.',
        suggestion: 'This could be a sign of a custom command and control (C2) channel using HTTP for covert communication, designed to blend in with normal web traffic and evade detection.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: A sophisticated attacker is using custom malware to exfiltrate data slowly and evade standard detection tools.',
        playbook: '1. Capture and analyze the full HTTP requests to understand the headers\' content.\n2. Block the destination IP address at the firewall.\n3. Isolate the internal server that is generating the traffic.\n4. Perform a deep forensic analysis on the server to find the malicious process.\n5. Update network intrusion detection signatures to alert on these headers.'
    },
    {
        id: 'SCEN015',
        description: 'A user behavior analysis tool has flagged a user suddenly downloading large amounts of data.',
        suggestion: 'This could be an insider threat preparing to leave the company with sensitive data, or a compromised account being used by an external attacker for data exfiltration.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: The user exfiltrates the company\'s entire customer database and sells it on the dark web.',
        playbook: '1. Temporarily disable the user\'s account to halt the activity.\n2. Contact the user\'s manager and HR to discreetly inquire about their status.\n3. Review the user\'s recent activity logs to see what data was accessed.\n4. Preserve a forensic image of the user\'s machine.\n5. Follow internal procedures for insider threat investigations.'
    },
    {
        id: 'SCEN016',
        description: 'A database administrator shares a suspicion that there have been unauthorised changes to data.',
        suggestion: 'This indicates a potential data tampering incident, either by an insider or an external attacker who has gained unauthorized database access, compromising data integrity.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: Financial records are altered to commit fraud, or critical operational data is corrupted, leading to major business disruption.',
        playbook: '1. Restrict access to the affected database to only essential personnel.\n2. Use database logs to identify who made the changes and from where.\n3. Determine the scope of the unauthorized modifications.\n4. Restore the affected data from the last known-good backup.\n5. Identify and close the security gap that allowed the unauthorized access.'
    },
    {
        id: 'SCEN017',
        description: 'Your CEO direct messages you that they have left their laptop on a plane.',
        suggestion: 'This is a significant physical security incident with potential for a major data breach, especially given the high-level access of the CEO.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: The laptop contains unencrypted sensitive company strategy documents, and a competitor gains access to them.',
        playbook: '1. Immediately initiate a remote wipe of the laptop.\n2. Disable the CEO\'s user account and reset all their passwords.\n3. Revoke all active sessions and tokens associated with the CEO\'s account.\n4. Review access logs for any unusual activity since the laptop was lost.\n5. Confirm that full-disk encryption was active on the device.'
    },
    {
        id: 'SCEN018',
        description: 'A member of the leadership team reports their company phone missing.',
        suggestion: 'This is a physical security incident that could compromise company data and communications, and potentially be used to bypass multi-factor authentication (MFA).',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The attacker bypasses MFA using the stolen phone and gains access to the leader\'s email, leading to a successful CEO fraud attack.',
        playbook: '1. Initiate a remote wipe of the mobile device.\n2. Disable the user\'s account and reset their password.\n3. Temporarily re-route their phone number if possible.\n4. Revoke access tokens for applications logged into on the phone.\n5. Issue a new, secured device to the user.'
    },
    {
        id: 'SCEN019',
        description: 'An employee mentions offhand that their personal phone has been stolen.',
        suggestion: 'This poses a potential risk if the employee used their personal phone for work (BYOD), including for email, chat, or multi-factor authentication (MFA).',
        risk: 'Risk: <span style="color: #FFDC00;">Medium</span>.\nWorst-case scenario: The stolen phone provides the attacker with access to the employee\'s work accounts, which can be used as a pivot point into the network.',
        playbook: '1. Ask the employee if they accessed any company resources on that phone.\n2. If yes, immediately reset the employee\'s work password.\n3. Revoke all active sessions for the employee\'s account.\n4. Temporarily disable their account if they used it for primary MFA.\n5. Reinforce the company\'s BYOD policy with the employee.'
    },
    {
        id: 'SCEN020',
        description: 'A shared testing device is missing from the office with no record of it being borrowed.',
        suggestion: 'This is a physical security lapse; the device could contain test credentials, proprietary code, or provide access to sensitive development environments.',
        risk: 'Risk: <span style="color: #FFDC00;">Medium</span>.\nWorst-case scenario: The device contains hardcoded credentials that provide access to the production source code repository.',
        playbook: '1. Confirm the device is actually missing and not just misplaced.\n2. Revoke any credentials or access keys stored on the device.\n3. Review the device\'s sign-out log to see who last used it.\n4. Check CCTV footage of the area where the device was stored.\n5. Improve the check-in/check-out process for shared equipment.'
    },
    {
        id: 'SCEN021',
        description: 'Two employees have reported a suspicious person attempting to access the office by tailgating.',
        suggestion: 'This is a physical intrusion attempt, which could be the precursor to an attacker gaining physical access to the network or planting a rogue device.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: An attacker successfully tailgates and connects a malicious device to an open network port in a conference room.',
        playbook: '1. Alert building security with a description of the suspicious person.\n2. Review CCTV footage of the entrance points.\n3. Send a company-wide reminder about the no-tailgating policy.\n4. Thank the employees who reported the incident.\n5. Conduct a spot-check for any unfamiliar devices in common areas.'
    },
    {
        id: 'SCEN022',
        description: 'An unrecognised external user keeps joining internal video calls.',
        suggestion: 'A compromised employee account or a leaked meeting link is being used to eavesdrop on internal conversations, posing a confidentiality risk.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The unrecognized user is a corporate spy recording confidential meetings about future product launches.',
        playbook: '1. Immediately remove the unrecognized user from the call.\n2. Lock the meeting to prevent further unauthorized joins.\n3. Investigate how the user joined (e.g., which employee\'s account, a public link).\n4. If an account was compromised, reset the password immediately.\n5. Reinforce training on secure meeting practices, like using waiting rooms.'
    },
    {
        id: 'SCEN023',
        description: 'An employee has received an abusive email from an internal service account.',
        suggestion: 'The service account\'s credentials have been compromised and are being used to send internal emails, possibly as a social engineering tactic or to cause disruption.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The compromised service account is used to send a malicious phishing email to all employees, leading to a widespread compromise.',
        playbook: '1. Immediately reset the password for the compromised service account.\n2. Analyze the email headers to determine the origin of the message.\n3. Review logs for the service account to identify other unauthorized actions.\n4. Scan for the root cause, such as credentials stored in a public code repository.\n5. Delete the abusive email from all user inboxes.'
    },
    {
        id: 'SCEN024',
        description: 'An employee has received a phone call claiming to be from Payroll, asking them to confirm their bank details.',
        suggestion: 'This is a classic vishing (voice phishing) attack attempting to trick an employee into revealing sensitive personal or financial information by impersonating a trusted department.',
        risk: 'Risk: <span style="color: #FFDC00;">Medium</span>.\nWorst-case scenario: The employee provides their banking details, leading to payroll diversion and financial loss for the employee.',
        playbook: '1. Instruct the employee to hang up immediately and not provide any information.\n2. Have the employee report the phone number that called them.\n3. Send a company-wide alert warning of the ongoing vishing campaign.\n4. Confirm with the real payroll department that they did not make the call.\n5. Include vishing examples in the next security awareness training.'
    },
    {
        id: 'SCEN025',
        description: 'A user has received a phone call from their company credit card issuer reporting suspicious activity.',
        suggestion: 'The employee\'s company credit card details have likely been compromised through a physical skimmer, malicious website, or breached merchant, and are now being used fraudulently.',
        risk: 'Risk: <span style="color: #FFDC00;">Medium</span>.\nWorst-case scenario: The compromised card is used for large fraudulent transactions, causing a direct financial loss to the company.',
        playbook: '1. Instruct the employee to confirm the call is legitimate by calling the number on the back of their card.\n2. If the activity is fraudulent, have the employee cancel the card immediately.\n3. Report the fraudulent activity to the card issuer.\n4. Review the employee\'s recent transactions to identify the point of compromise.\n5. Issue a new card to the employee.'
    },
    {
        id: 'SCEN026',
        description: 'An employee has scanned a QR code sent to them in an email, and since then, their phone has been getting very hot.',
        suggestion: 'The employee has fallen victim to "quishing" (QR code phishing), and scanning the code likely installed malware, a cryptominer, or a malicious profile on their phone.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The malware on the phone steals the employee\'s credentials and MFA tokens, leading to a full account takeover.',
        playbook: '1. Instruct the employee to disconnect their phone from all networks (Wi-Fi, cellular).\n2. Reset the employee\'s work account password immediately.\n3. Revoke all active sessions associated with the employee.\n4. Guide the employee through a factory reset of their phone.\n5. Educate users on the dangers of scanning untrusted QR codes.'
    },
    {
        id: 'SCEN027',
        description: 'Your public website is displaying a message supporting Russia\'s invasion of Ukraine.',
        suggestion: 'An attacker has compromised the web server or content management system (CMS) and altered the website\'s content in a "hacktivism" style defacement.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The defacement includes a malicious script that infects website visitors with malware, damaging the company\'s reputation.',
        playbook: '1. Take the website offline and replace it with a static maintenance page.\n2. Restore the website content from a known-good backup.\n3. Investigate the server and CMS logs to find the vulnerability used by the attacker.\n4. Patch the vulnerability and reset all administrative credentials.\n5. Bring the clean, patched website back online.'
    },
    {
        id: 'SCEN028',
        description: 'An employee keeps receiving a warning message that their screen is being recorded.',
        suggestion: 'The employee\'s device may be infected with spyware or a Remote Access Trojan (RAT) that is capturing their screen activity, a severe breach of privacy and security.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: The attacker is recording the employee entering passwords, accessing sensitive data, and viewing confidential information.',
        playbook: '1. Instruct the employee to immediately disconnect their device from the network.\n2. Isolate the device for forensic analysis.\n3. Reset all of the employee\'s passwords from a separate, clean device.\n4. Review the employee\'s recent access logs for any suspicious activity.\n5. Re-image the compromised device before returning it to use.'
    },
    {
        id: 'SCEN029',
        description: 'An employee has shared sensitive company information on a public Discord channel.',
        suggestion: 'An insider data leak, whether accidental or malicious, has occurred, exposing confidential company information on a public platform.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The leaked information is a set of API keys that give an attacker access to production systems.',
        playbook: '1. Work with Discord\'s trust and safety team to get the information removed.\n2. Identify the employee who posted the information and involve HR.\n3. If the leak involved credentials or keys, revoke them immediately.\n4. Implement or enhance data loss prevention (DLP) tools.\n5. Reinforce data handling policies with all employees.'
    },
    {
        id: 'SCEN030',
        description: 'A former employee posts on LinkedIn claiming the company\'s product contains critical security flaws.',
        suggestion: 'A disgruntled former employee is attempting to damage the company\'s reputation by disclosing alleged security vulnerabilities, a form of public shaming.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The disclosed flaws are real and are actively exploited by attackers before the company can patch them.',
        playbook: '1. Immediately assemble a team to validate the former employee\'s claims.\n2. If the vulnerabilities are real, prioritize developing and deploying patches.\n3. Engage the legal and PR teams to manage public communications.\n4. Review the former employee\'s exit process for any gaps.\n5. Do not engage publicly with the former employee on social media.'
    },
    {
        id: 'SCEN031',
        description: 'Several company devices are displaying messages saying their storage is encrypted and asking for a ransom to be paid in Bitcoin.',
        suggestion: 'A widespread ransomware infection is underway, encrypting company data and demanding payment for its release, indicating a severe security failure.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: All company data and backups are encrypted, forcing the company to cease operations entirely.',
        playbook: '1. Isolate all affected devices from the network to prevent further spread.\n2. Activate the company\'s incident response plan immediately.\n3. Do not turn off encrypted devices; preserve them for forensic analysis.\n4. Engage with law enforcement and external cybersecurity experts.\n5. Begin restoring systems from clean, offline backups.'
    },
    {
        id: 'SCEN032',
        description: 'You have discovered a feed from the building CCTV cameras streaming on the dark web.',
        suggestion: 'The building\'s physical security system or network has been compromised, allowing attackers to access and stream live video feeds for surveillance purposes.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: Attackers use the live CCTV feed to plan a targeted and successful physical break-in of the office.',
        playbook: '1. Immediately disconnect the CCTV system from the external network.\n2. Notify the building management company of the breach.\n3. Change all default passwords on the CCTV equipment.\n4. Ensure the CCTV system is on a segmented, secure network.\n5. Scan for other exposed IoT devices on the network.'
    },
    {
        id: 'SCEN033',
        description: 'An employee has installed Tor browser on their company device.',
        suggestion: 'An employee is attempting to bypass network monitoring and security controls, possibly to exfiltrate data, access unauthorized content, or for malicious communication.',
        risk: 'Risk: <span style="color: #FFDC00;">Medium</span>.\nWorst-case scenario: The employee is using Tor to communicate with attackers or exfiltrate sensitive company data anonymously.',
        playbook: '1. Confirm if the use of Tor violates the company\'s acceptable use policy.\n2. Block Tor traffic at the network firewall.\n3. Have a conversation with the employee and their manager about the installation.\n4. Review the device\'s logs for any other suspicious activity.\n5. Use application control software to prevent installation of unauthorized programs.'
    },
    {
        id: 'SCEN034',
        description: 'A company Github repo was incorrectly set as public when it was created over a year ago.',
        suggestion: 'A critical misconfiguration has led to potentially sensitive source code, credentials, or API keys being publicly exposed for over a year, likely already discovered.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: Hardcoded cloud credentials in the repository have already been found and used by attackers to compromise the company\'s cloud environment.',
        playbook: '1. Immediately make the Github repository private.\n2. Scan the entire history of the repository for any secrets like passwords or API keys.\n3. Revoke and rotate any secrets found in the repository.\n4. Review Github organization settings to prevent new public repositories.\n5. Implement pre-commit hooks to scan for secrets before code is pushed.'
    },
    {
        id: 'SCEN035',
        description: 'The CEO of your company keeps reporting their Okta account as locked.',
        suggestion: 'The CEO\'s account is being targeted by a password spray or brute-force attack, causing the account to lock due to repeated failed login attempts.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The lockouts are a distraction while an attacker who has already compromised the CEO\'s password uses a stolen session cookie to access applications.',
        playbook: '1. Analyze the Okta logs to identify the source IPs of the failed logins.\n2. Block the malicious IPs.\n3. Speak with the CEO to confirm they are not the one causing the lockouts.\n4. Ensure MFA is enabled and functioning correctly on their account.\n5. Monitor the account closely for any successful, but suspicious, logins.'
    },
    {
        id: 'SCEN036',
        description: 'The CFO of your company complains that they cannot share company documents with their personal Google account.',
        suggestion: 'This is not a security incident, but rather a security control (likely Data Loss Prevention, or DLP) working as intended to prevent data leakage to personal accounts.',
        risk: 'Risk: <span style="color: #0074D9;">Low</span>.\nWorst-case scenario: The CFO finds an unsanctioned way to share the documents, creating a shadow IT problem and data leakage risk.',
        playbook: '1. Explain to the CFO that this is a security feature to protect company data.\n2. Offer a secure, company-approved method for sharing the documents.\n3. Use this as an opportunity to reinforce data handling policies.\n4. Thank the CFO for bringing the issue to the security team\'s attention.\n5. Review DLP rules to ensure they meet business needs without being overly restrictive.'
    },
    {
        id: 'SCEN037',
        description: 'You discover a Post-it on a company whiteboard which reads, Usr: admin, passwd: 0dyss3y',
        suggestion: 'This is a severe violation of basic password hygiene and physical security policy, exposing administrative credentials to anyone with physical access to the whiteboard.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: A malicious insider or even a cleaning crew member uses the credentials to gain administrative access to a critical system.',
        playbook: '1. Immediately take the Post-it note and secure it.\n2. Reset the password for the "admin" account immediately.\n3. Review logs for the "admin" account for any recent suspicious activity.\n4. Try to determine who wrote the note and provide them with security training.\n5. Send a company-wide reminder about password security best practices.'
    },
    {
        id: 'SCEN038',
        description: 'The building management company have reported an unauthorised webcam discovered in the building\'s underground bike storage.',
        suggestion: 'This is a physical surveillance attempt, possibly to learn employee schedules, steal high-value bikes, or gain information for a future physical intrusion.',
        risk: 'Risk: <span style="color: #FFDC00;">Medium</span>.\nWorst-case scenario: The webcam is being used by an attacker to plan a targeted physical attack against an employee.',
        playbook: '1. Do not disturb the webcam; notify building security and law enforcement.\n2. Work with security to safely remove the device for forensic analysis.\n3. Analyze the device to determine how it\'s powered and where it\'s sending data.\n4. Conduct a thorough physical sweep of the entire building for other devices.\n5. Review access logs for the bike storage area.'
    },
    {
        id: 'SCEN039',
        description: 'You witness an employee printing out company documents and packing them in their rucksack to take home.',
        suggestion: 'This is a potential insider threat or data exfiltration attempt, violating data handling policies by creating an uncontrolled physical copy of company documents.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The employee is taking home confidential intellectual property to give to a competitor.',
        playbook: '1. Discreetly report the observation to HR and the employee\'s manager.\n2. Review the employee\'s recent digital activity for other signs of data gathering.\n3. Check print logs to see exactly what documents were printed.\n4. Let HR and legal guide the next steps according to company policy.\n5. Review and strengthen policies around taking physical documents off-site.'
    },
    {
        id: 'SCEN040',
        description: 'You notice that an employee has called in sick on the day of mandatory security training for the second year in a row.',
        suggestion: 'This could indicate an employee who is actively avoiding security responsibilities, making them a higher-risk user and potentially a weak link in the company\'s security posture.',
        risk: 'Risk: <span style="color: #0074D9;">Low</span>.\nWorst-case scenario: This employee is the one who ultimately clicks on a phishing link because they missed the training, leading to a breach.',
        playbook: '1. Note the pattern of absence.\n2. Work with HR and the employee\'s manager to ensure they complete the training.\n3. Consider assigning additional, targeted training modules to the user.\n4. Document the behavior as part of a potential insider risk assessment.\n5. Ensure security training is a mandatory, tracked part of performance reviews.'
    },
    {
        id: 'SCEN041',
        description: 'Your SIEM is reporting an AWS security group open to the world.',
        suggestion: 'A critical cloud security misconfiguration that exposes a resource (like a server or database) to the entire internet, making it a prime target for automated scanning and attacks.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: An exposed database containing all customer PII is discovered by an attacker and exfiltrated.',
        playbook: '1. Immediately modify the security group to restrict access to only known, required IPs.\n2. Identify the resource associated with the security group.\n3. Analyze the resource\'s logs for any signs of unauthorized access.\n4. Identify who created the misconfigured rule and provide them with training.\n5. Implement automated tools to continuously scan for and alert on such misconfigurations.'
    },
    {
        id: 'SCEN042',
        description: 'OWASP Dependency Check has reported several critical vulnerabilities in your application\'s live code.',
        suggestion: 'A failure in the secure software development lifecycle (SDLC) process has allowed code with known critical vulnerabilities to be deployed to production, exposing the application to attack.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: An attacker actively exploits one of the vulnerabilities to achieve remote code execution on the application server.',
        playbook: '1. Immediately convene the development team to assess the vulnerabilities.\n2. Prioritize patching the most critical vulnerabilities first.\n3. Consider taking the application offline or using a WAF to virtually patch the flaws.\n4. Deploy the patches as quickly as possible.\n5. Conduct a post-mortem to improve the SDLC and prevent recurrence.'
    },
    {
        id: 'SCEN043',
        description: 'An employee posts the office Wi-Fi password in a company-wide WhatsApp group.',
        suggestion: 'A violation of password handling policy that exposes the office network to anyone who can see the WhatsApp group messages, including former employees.',
        risk: 'Risk: <span style="color: #FFDC00;">Medium</span>.\nWorst-case scenario: A former employee still in the WhatsApp group uses the password to access the office network and attack internal systems.',
        playbook: '1. Change the office Wi-Fi password immediately.\n2. Communicate the new password through a secure, official channel.\n3. Delete the message from the WhatsApp group.\n4. Remind employees of the correct policy for sharing sensitive information.\n5. Consider implementing a separate, isolated guest network.'
    },
    {
        id: 'SCEN044',
        description: 'You notice that a recent delivery to the office had the door entry code included in the delivery instructions.',
        suggestion: 'A serious physical security lapse that exposes the office entry code to delivery drivers and potentially anyone who sees the package or delivery notes.',
        risk: 'Risk: <span style="color: #FFDC00;">Medium</span>.\nWorst-case scenario: A person with malicious intent uses the code to gain unauthorized physical access to the office after hours.',
        playbook: '1. Change the door entry code immediately.\n2. Communicate the new code to all employees.\n3. Identify who placed the order and provide them with security training.\n4. Establish a clear policy on how to handle deliveries securely.\n5. Review physical access logs for any unusual entries.'
    },
    {
        id: 'SCEN045',
        description: 'An employee mentions that they back up their work laptop to a personal NAS box.',
        suggestion: 'An employee is creating an unauthorized and unsecured copy of company data on a personal device, creating a data leakage risk outside of company control.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The personal NAS is not secure, gets compromised, and the attacker gains access to all the backed-up company data.',
        playbook: '1. Speak with the employee and their manager to understand why they are doing this.\n2. Instruct the employee to cease the personal backups immediately.\n3. Ensure the employee has access to a sanctioned, secure backup solution.\n4. Work with the employee to securely delete the company data from their NAS.\n5. Reinforce the company\'s policy on data storage and backups.'
    },
    {
        id: 'SCEN046',
        description: 'You discover a cybersquatting domain that has duplicated your public website.',
        suggestion: 'An attacker has set up a typosquatting or cybersquatting domain to impersonate the company, likely for use in phishing campaigns or to defraud customers.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The fake website is used to launch a large-scale phishing campaign against the company\'s customers, leading to fraud and reputational damage.',
        playbook: '1. Analyze the fake website to determine its purpose (e.g., credential harvesting).\n2. Report the domain to its registrar and hosting provider for abuse.\n3. Initiate a legal takedown process through the company\'s legal team.\n4. Warn customers and employees about the fraudulent domain.\n5. Implement DMARC to make it harder for attackers to spoof company emails.'
    },
    {
        id: 'SCEN047',
        description: 'You notice an external Slack account in a company channel that has the same name and profile as an internal account.',
        suggestion: 'An attacker is attempting to impersonate an employee in Slack to conduct social engineering attacks against other employees, such as asking for passwords or sensitive information.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The impersonator convinces an employee in finance to make a fraudulent wire transfer.',
        playbook: '1. Deactivate the external Slack account immediately.\n2. Notify employees in the channel about the impersonation attempt.\n3. Review Slack settings to restrict how external accounts can be added.\n4. Educate users on how to spot external accounts in Slack.\n5. Review audit logs to see what messages the impersonator sent.'
    },
    {
        id: 'SCEN048',
        description: 'You receive a WhatsApp message claiming to be from the CEO, asking for a quick call to discuss an urgent issue.',
        suggestion: 'This is a classic CEO fraud or whaling attack using social media, attempting to create a sense of urgency to bypass normal financial procedures.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: The employee is tricked into making an urgent, large, and fraudulent wire transfer to an attacker\'s account.',
        playbook: '1. Do not respond to the WhatsApp message.\n2. Verify the request with the CEO through a separate, trusted communication channel.\n3. Report the phone number to the security team.\n4. Block the number.\n5. Send a company-wide reminder about out-of-band verification for urgent financial requests.'
    },
    {
        id: 'SCEN049',
        description: 'ChatGPT is recommending code snippets identical to your organisation\'s proprietary code.',
        suggestion: 'Employees are pasting proprietary source code into a public AI tool, which may be using that data for training its model, leading to intellectual property leakage.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: The company\'s core, secret algorithms are absorbed by the AI model and are later suggested to a competitor.',
        playbook: '1. Implement a policy immediately banning the use of public AI tools for proprietary code.\n2. Block access to public AI websites on the corporate network.\n3. Provide developers with a secure, private, on-premise or enterprise AI coding assistant.\n4. Use code scanning tools to search for proprietary snippets on public sites.\n5. Conduct training on the intellectual property risks of using public AI.'
    },
    {
        id: 'SCEN050',
        description: 'Several users email you to ask why you are sending them spam.',
        suggestion: 'Your email account has likely been compromised and is being used to send spam or phishing emails to your contacts, leveraging your reputation to attack others.',
        risk: 'Risk: <span style="color: #FF851B;">High</span>.\nWorst-case scenario: Your compromised account is used to send a targeted phishing email to a high-value colleague, leading to a wider breach.',
        playbook: '1. Reset your email password immediately from a clean device.\n2. Revoke all active sessions for your account.\n3. Enable multi-factor authentication (MFA) if it is not already on.\n4. Send a follow-up email to your contacts warning them not to open the previous message.\n5. Work with the security team to analyze your account for other malicious activity.'
    },
    {
        id: 'SCEN051',
        description: 'Your Finance team now regularly use AI to write investor reports.',
        suggestion: 'This suggests a potential data leakage risk and reliance on third-party AI models with confidential company data, as the finance team may be inputting sensitive financial information into public AI tools.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: Sensitive, non-public financial data is absorbed into the AI model\'s training data and later exposed, violating SEC regulations.',
        playbook: '1. Immediately engage with the Head of Finance to understand the scope and process.\n2. Halt the use of public AI tools for handling sensitive company data.\n3. Provide a secure, company-approved AI platform or sandbox for such tasks.\n4. Develop and implement a clear Acceptable Use Policy for AI tools.\n5. Provide training to the finance team on the risks and safe use of AI.'
    },
    {
        id: 'SCEN052',
        description: 'An internal endpoint is executing multiple penetration testing tools at a rate faster than a human hacker could orchestrate.',
        suggestion: 'This strongly suggests an AI-orchestrated cyber espionage campaign. A threat actor has likely established a foothold and is using an autonomous AI agent, rather than a human operator, to conduct rapid reconnaissance, vulnerability discovery, and lateral movement.',
        risk: 'Risk: <span style="color: #FF4136;">Critical</span>.\nWorst-case scenario: The autonomous AI operates at machine speed to discover and exploit a vulnerability, map the entire internal network, and exfiltrate highly sensitive intelligence before human defenders can even process the initial alerts.',
        playbook: '1. Immediately isolate the affected endpoint from the network to sever the AI\'s orchestration connection.\n2. Block the specific external AI API domains at the firewall for the affected segment to disrupt the command loop.\n3. Analyze the endpoint to identify the orchestration framework (e.g., MCP servers) and the initial access vector.\n4. Review network logs to determine what data, services, or credentials the AI agent successfully accessed.\n5. Search the endpoint for automated documentation (like markdown files) left behind by the AI, which threat actors often use to hand off persistent access to human operators.'
    }
];

window.questionsData = [
    "Is this is a security incident?",
    "How would you detect this?",
    "What questions does this raise?",
    "Who would you speak to about this?",
    "What actions would you take?",
    "What's really happening here?",
    "What protections can you put in place to prevent this?",
    "What do you do first?",
    "Which elements of the CIA triad are affected?",
    "Is this scenario high-risk or low-risk?",
    "Is this a threat or a vulnerability?",
    "Is there a name for this?",
    "What do you stand to lose?",
    "Do you have controls in place for this?",
    "Is there another layer of defence you can add?",
    "How worried do you feel?",
    "Is this a red alert?",
    "Do you have a playbook for this?",
    "How long would it take you to log into the systems you need to access?",
    "Who in your organisation has the power to do something about this?",
    "Is this cybersecurity or something else?",
    "What damage could this cause: financial, reputational, or something else?",
    "Is your repsonse governed by any laws or regulations: GDPR, PCI-DSS, something else?",
    "Is someone committing a crime?",
    "Which ethical considerations must you take into account?",
    "What assumptions are you making?",
    "Could one of your assumptions be wrong?",
    "What's the biggest mistake you could make?",
    "Do you need to send out comms?",
    "What's the scope of impact here?",
    "How bad could this get?",
    "What's the endgame?",
    "What are they trying to achieve?",
    "What's the motivation here?",
    "If you were the bad actor here, what would you do next?",
    "Could AI be part of the solution?",
    "Could AI be part of the problem?"
];