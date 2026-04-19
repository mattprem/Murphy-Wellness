<?php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contact.html');
    exit;
}

$honeypot = trim((string) ($_POST['company'] ?? ''));
if ($honeypot !== '') {
    header('Location: thank-you.html');
    exit;
}

$name = trim((string) ($_POST['name'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$contactMethod = trim((string) ($_POST['contact_method'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$redirect = trim((string) ($_POST['redirect'] ?? 'thank-you.html'));

if ($name === '' || $phone === '' || $message === '') {
    header('Location: contact.html?status=missing');
    exit;
}

$recipient = 'info@premonition.health';
$subject = 'Murphy Wellness Website Contact Form';
$safeName = preg_replace("/[\r\n]+/", ' ', $name);
$safeEmail = filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : '';
$safeMethod = preg_replace("/[\r\n]+/", ' ', $contactMethod);
$safePhone = preg_replace("/[\r\n]+/", ' ', $phone);

$bodyLines = [
    'New website inquiry from Murphy Wellness',
    '',
    'Name: ' . $safeName,
    'Phone: ' . $safePhone,
    'Email: ' . ($safeEmail !== '' ? $safeEmail : 'Not provided'),
    'Preferred Contact Method: ' . ($safeMethod !== '' ? $safeMethod : 'Not provided'),
    '',
    'Message:',
    $message,
];

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Murphy Wellness Website <website@murphywellness.org>',
];

if ($safeEmail !== '') {
    $headers[] = 'Reply-To: ' . $safeEmail;
}

$sent = mail($recipient, $subject, implode("\n", $bodyLines), implode("\r\n", $headers));

if ($sent) {
    header('Location: ' . ($redirect !== '' ? $redirect : 'thank-you.html'));
    exit;
}

header('Location: contact.html?status=error');
exit;
